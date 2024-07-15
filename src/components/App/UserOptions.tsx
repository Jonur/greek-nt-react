import React, { ChangeEvent, useState } from 'react';

import { PRIVATE_CLUBS_IDS, TRANSLATIONS } from 'src/constants';
import { useViewCtx } from 'src/hooks';
import { NationalTeam, Sport, StoredPrivateClubs } from 'src/types';
import { getTeamImage, getUserClubOptions } from 'src/utils';

const UserOptions: React.FC = () => {
  const { setMenuOpen, setPrivateClubs } = useViewCtx();

  const [privateClubsPreview, setPrivateClubsPreview] = useState<StoredPrivateClubs>(getUserClubOptions());

  const isChecked = (sport: Sport, id: number) => getUserClubOptions()[sport].includes(id) || undefined;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [sport, id] = e.target.name.split('-');

    setPrivateClubsPreview((prevClubs) => {
      const prevClubsForSport = prevClubs[sport as Sport] || [];

      return {
        ...prevClubs,
        [sport]: e.target.checked
          ? [...prevClubsForSport, Number(id)]
          : prevClubsForSport.filter((clubId: number) => clubId !== Number(id)),
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('privateClubs', JSON.stringify(privateClubsPreview));
    setPrivateClubs(privateClubsPreview);
    setMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 right-0 bg-blue-10 shadow-lg p-4 pt-14 w-full h-full">
      <button
        aria-label="Close extra menu"
        className="absolute top-1 right-5 text-4xl"
        onClick={() => setMenuOpen(false)}
      >
        &times;
      </button>

      <h1 className="font-semibold">Settings</h1>
      <h2>{TRANSLATIONS.userOptionsInfo}</h2>

      <form className="mt-4 flex flex-col gap-y-8 items-start" onSubmit={handleSubmit}>
        <section>
          <h3 className="flex gap-x-1 text-base items-center">
            <img src={`img/basketball.svg`} className="w-6 h-6" />
            <span>Basketball</span>
          </h3>

          <ul className="pl-1 mt-3 flex flex-col gap-y-2">
            {PRIVATE_CLUBS_IDS[`${Sport.BASKETBALL}-${NationalTeam.MEN}`].map((id) => (
              <li role="option" key={id} className="flex gap-x-2 items-center">
                <input
                  type="checkbox"
                  defaultChecked={isChecked(Sport.BASKETBALL, id)}
                  id={`${id}`}
                  name={`${Sport.BASKETBALL}-${id}`}
                  onChange={handleChange}
                />
                <img src={getTeamImage(id)} className="w-6 h-6" />
                <label htmlFor={`${id}`}>{TRANSLATIONS[id]}</label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="flex gap-x-1 text-base items-center">
            <img src={`img/football.svg`} className="w-6 h-6" />
            <span>Football</span>
          </h3>

          <ul className="pl-1 mt-3 flex flex-col gap-y-2">
            {PRIVATE_CLUBS_IDS[`${Sport.FOOTBALL}-${NationalTeam.MEN}`].map((id) => (
              <li role="option" key={id} className="flex gap-x-2 items-center">
                <input
                  type="checkbox"
                  defaultChecked={isChecked(Sport.FOOTBALL, id)}
                  id={`${id}`}
                  name={`${Sport.FOOTBALL}-${id}`}
                  onChange={handleChange}
                />
                <img src={getTeamImage(id)} className="w-6 h-6" />
                <label htmlFor={`${id}`}>{TRANSLATIONS[id]}</label>
              </li>
            ))}
          </ul>
        </section>

        <button className="bg-primary text-blue-10 px-4 rounded-lg h-[40px] leading-none flex items-center mt-4 pb-0.5">
          Update preferences
        </button>
      </form>
    </nav>
  );
};

export default UserOptions;
