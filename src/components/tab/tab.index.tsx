import React, { useMemo, useState, Children, isValidElement } from 'react';

export type TabProps = {
  header: string;
  children: React.ReactNode;
};

export function Tab(_: TabProps) {
  return null;
}

type TabGroupProps = {
  defaultIndex?: number;
  className?: string;
  children: React.ReactNode;
};

export function TabGroup({ defaultIndex = 0, className = '', children }: TabGroupProps) {
  const tabs = useMemo(
    () => Children.toArray(children).filter(isValidElement) as React.ReactElement<TabProps>[],
    [children]
  );

  const [active, setActive] = useState(Math.min(defaultIndex, Math.max(tabs.length - 1, 0)));

  const ids = useMemo(
    () =>
      tabs.map((_, i) => ({
        tab: `tab-${i}-${Math.random().toString(36).slice(2)}`,
        panel: `panel-${i}-${Math.random().toString(36).slice(2)}`,
      })),
    [tabs]
  );

  return (
    <div className={'w-full ' + className}>
      <div role="tablist" aria-orientation="horizontal" className="flex gap-2 border-b">
        {tabs.map((t, i) => (
          <button
            key={i}
            id={ids[i].tab}
            role="tab"
            aria-controls={ids[i].panel}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') setActive((p) => (p + 1) % tabs.length);
              else if (e.key === 'ArrowLeft') setActive((p) => (p - 1 + tabs.length) % tabs.length);
              else if (e.key === 'Home') setActive(0);
              else if (e.key === 'End') setActive(tabs.length - 1);
              else if (e.key === ' ' || e.key === 'Enter') setActive(i);
            }}
            className={
              'relative px-4 py-2 text-sm md:text-base font-medium rounded-t-xl outline-none ' +
              (active === i
                ? 'text-black'
                : 'text-gray-500 hover:text-gray-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400')
            }
          >
            <span>{t.props.header}</span>
            <span
              aria-hidden
              className={
                'pointer-events-none absolute left-0 right-0 -bottom-px h-[3px] ' +
                (active === i ? 'bg-black' : 'bg-transparent')
              }
            />
          </button>
        ))}
      </div>

      {tabs.map((t, i) => (
        <div
          key={i}
          id={ids[i].panel}
          role="tabpanel"
          aria-labelledby={ids[i].tab}
          hidden={active !== i}
          className="p-4"
        >
          {t.props.children}
        </div>
      ))}
    </div>
  );
}
