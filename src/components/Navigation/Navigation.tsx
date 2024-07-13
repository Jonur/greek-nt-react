import c from 'classnames';

import { SPORT_ICON_MAP, TRANSLATIONS } from 'src/constants';
import { useDataCtx, useViewCtx } from 'src/hooks';
import { FetchingStatus, NationalTeam, Sport } from 'src/types';

const Navigation: React.FC = () => {
  const { sport, setSport, nationalTeam, setNationalTeam } = useViewCtx();
  const { status } = useDataCtx();

  return (
    <nav className="px-4 mt-6 flex flex-col gap-y-6">
      <ul role="menubar" className="w-full bg-blue-20 rounded-lg grid grid-cols-3 gap-x-2 px-0.5 text-sm">
        {Object.values(Sport).map((s) => (
          <li key={s} role="menuitem" className="h-[44px]">
            <button
              disabled={status === FetchingStatus.LOADING}
              onClick={() => setSport(s)}
              className={c(
                'flex gap-x-1 items-center justify-center w-full py-2 mt-0.5 transition-colors duration-300',
                {
                  'bg-white rounded-lg font-semibold': sport === s,
                }
              )}
            >
              <img src={`img/${SPORT_ICON_MAP[s]}.svg`} className="w-6 h-6" />
              {TRANSLATIONS[s]}
            </button>
          </li>
        ))}
      </ul>

      <ul role="tabpanel" className="grid grid-cols-2 w-full gap-x-2 text-sm">
        {Object.values(NationalTeam).map((team) => (
          <li key={team} role="tab">
            <button
              disabled={status === FetchingStatus.LOADING}
              onClick={() => setNationalTeam(team)}
              className={c(
                'flex gap-x-1 items-center justify-center w-full transition-colors duration-300 border-b-2 h-[30px]',
                {
                  'border-primary font-semibold': nationalTeam === team,
                  'border-blue-10': nationalTeam !== team,
                }
              )}
            >
              {TRANSLATIONS[team]}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
