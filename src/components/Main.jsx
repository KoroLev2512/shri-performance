import {Event} from "./Event";
import {useEffect, useRef, useState} from "react";

const TABS = {
  all: {
    title: "Все",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Yeelight LED Smart Bulb",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "D-Link Omna 180 Cam",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "temp",
        iconLabel: "Температура",
        title: "Elgato Eve Degree Connected",
        subtitle: "Выключено до 17:00",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "LIFX Mini Day & Dusk A60 E27",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
    ],
  },
  kitchen: {
    title: "Кухня",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Yeelight LED Smart Bulb",
        subtitle: "Включено",
      },
      {
        icon: "temp",
        iconLabel: "Температура",
        title: "Elgato Eve Degree Connected",
        subtitle: "Выключено до 17:00",
      },
    ],
  },
  hall: {
    title: "Зал",
    items: [
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Выключено",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Выключено",
      },
    ],
  },
  lights: {
    title: "Лампочки",
    items: [
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "D-Link Omna 180 Cam",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "LIFX Mini Day & Dusk A60 E27",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
    ],
  },
  cameras: {
    title: "Камеры",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
    ],
  },
};
for (let i = 0; i < 6; ++i)
  TABS.all.items.push(...TABS.all.items);

const TABS_KEYS = Object.keys(TABS);

export function Main() {
  const ref = useRef();
  const initedRef = useRef(false);
  const [activeTab, setActiveTab] = useState('');
  const [hasRightScroll, setHasRightScroll] = useState(false);

  useEffect(() => {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
    }
  }, [activeTab, initedRef]);

  const onSelectInput = event => {
    setActiveTab(event.target.value);
  };

  let sizes = [];
  let myWidth = 0;
  const onSize = size => {
    sizes.push(size);
    myWidth += size.width;
  };

  useEffect(() => {
    const newHasRightScroll = myWidth > ref.current.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  }, [activeTab]);

  const onArrowCLick = () => {
    const scroller = ref.current.querySelector('.section__panel:not(.section__panel_hidden)');
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: 'smooth'
      });
    }
  };
  return <>
      <div className="section__title">
        <h2 className="section__title-header">
          Избранные устройства
        </h2>

        <select className="section__select" defaultValue="all" onInput={onSelectInput}>
          <option value="all">Все</option>
          <option value="kitchen">Кухня</option>
          <option value="hall">Зал</option>
          <option value="lights">Лампочки</option>
          <option value="cameras">Камеры</option>
        </select>

        <ul role="tablist" className="section__tabs">
          <li
              role="tab"
              aria-selected={activeTab === "all"}
              tabIndex={"all" === activeTab ? '0' : undefined}
              className={'section__tab' + ("all" === activeTab ? ' section__tab_active' : '')}
              id="tab_all"
              aria-controls="panel_all"
              onClick={() => setActiveTab("all")}
          >
            Все
          </li>
          <li
              role="tab"
              aria-selected={activeTab === "kitchen"}
              tabIndex={"kitchen" === activeTab ? '0' : undefined}
              className={'section__tab' + ("kitchen" === activeTab ? ' section__tab_active' : '')}
              id="tab_kitchen"
              aria-controls="panel_kitchen"
              onClick={() => setActiveTab("kitchen")}
          >
            Кухня
          </li>
          <li
              role="tab"
              aria-selected={activeTab === "hall"}
              tabIndex={"hall" === activeTab ? '0' : undefined}
              className={'section__tab' + ("hall" === activeTab ? ' section__tab_active' : '')}
              id="tab_hall"
              aria-controls="panel_hall"
              onClick={() => setActiveTab("hall")}
          >
            Зал
          </li>
          <li
              role="tab"
              aria-selected={activeTab === "lights"}
              tabIndex={"lights" === activeTab ? '0' : undefined}
              className={'section__tab' + ("lights" === activeTab ? ' section__tab_active' : '')}
              id="tab_lights"
              aria-controls="panel_lights"
              onClick={() => setActiveTab("lights")}
          >
            Лампочки
          </li>
          <li
              role="tab"
              aria-selected={activeTab === "cameras"}
              tabIndex={"cameras" === activeTab ? '0' : undefined}
              className={'section__tab' + ("cameras" === activeTab ? ' section__tab_active' : '')}
              id="tab_cameras"
              aria-controls="panel_cameras"
              onClick={() => setActiveTab("cameras")}
          >
            Камеры
          </li>
        </ul>
      </div>

      <div className="section__panel-wrapper" ref={ref}>
        {TABS_KEYS.map(key =>
            <div key={key} role="tabpanel"
                 className={'section__panel' + (key === activeTab ? '' : ' section__panel_hidden')}
                 aria-hidden={key === activeTab ? 'false' : 'true'} id={`panel_${key}`} aria-labelledby={`tab_${key}`}>
              <ul className="section__panel-list">
                {TABS[key].items.map((item, index) =>
                    <Event
                        key={index}
                        {...item}
                        onSize={onSize}
                    />
                )}
              </ul>
            </div>
        )}
        {hasRightScroll &&
            <div className="section__arrow" onClick={onArrowCLick}></div>
        }
      </div>
    </>
}