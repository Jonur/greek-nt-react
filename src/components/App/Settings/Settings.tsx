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
    <nav className="absolute max-w-[800px] mx-auto top-0 right-0 lg:right-auto bg-blue-10 shadow-lg p-4 pt-8 w-full h-full flex flex-col">
      <h1 className="font-medium">{TRANSLATIONS['settings.title']}</h1>
      <h2>{TRANSLATIONS['settings.description']}</h2>

      <form className="mt-[40px] flex flex-col flex-1 gap-y-8 items-start" onSubmit={handleSubmit}>
        <section className="w-full">
          <h3 className="flex gap-x-1 text-base items-center font-medium">
            <img src={`img/basketball.svg`} className="w-6 h-6" />
            <span>{TRANSLATIONS[Sport.BASKETBALL]}</span>
          </h3>

          <ul className="mt-3 flex flex-col gap-y-2 bg-white rounded-lg w-full p-4">
            {PRIVATE_CLUBS_IDS[`${Sport.BASKETBALL}-${NationalTeam.MEN}`].map((id) => (
              <li role="option" key={id} className="flex gap-x-2 items-center">
                <img src={getTeamImage(id)} className="w-6 h-6" />
                <label htmlFor={`${id}`} className="flex-1">
                  {TRANSLATIONS[id]}
                </label>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={isChecked(Sport.BASKETBALL, id)}
                    id={`${id}`}
                    name={`${Sport.BASKETBALL}-${id}`}
                    onChange={handleChange}
                  />
                  <div className="relative w-9 h-5 bg-blue-20 peer-focus:outline-none peer-focus:ring-blue-30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-30" />
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full">
          <h3 className="flex gap-x-1 text-base items-center font-medium">
            <img src={`img/football.svg`} className="w-6 h-6" />
            <span>{TRANSLATIONS[Sport.FOOTBALL]}</span>
          </h3>

          <ul className="mt-3 flex flex-col gap-y-2 bg-white rounded-lg w-full p-4">
            {PRIVATE_CLUBS_IDS[`${Sport.FOOTBALL}-${NationalTeam.MEN}`].map((id) => (
              <li role="option" key={id} className="flex gap-x-2 items-center">
                <img src={getTeamImage(id)} className="w-6 h-6" />
                <label htmlFor={`${id}`} className="flex-1">
                  {TRANSLATIONS[id]}
                </label>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={isChecked(Sport.FOOTBALL, id)}
                    id={`${id}`}
                    name={`${Sport.FOOTBALL}-${id}`}
                    onChange={handleChange}
                  />
                  <div className="relative w-9 h-5 bg-blue-20 peer-focus:outline-none peer-focus:ring-blue-30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-30" />
                </label>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex gap-x-2 w-full justify-end absolute bottom-6 right-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-primary px-4 h-[40px] leading-none flex items-center mt-4 pb-0.5"
          >
            {TRANSLATIONS['cta.cancel']}
          </button>

          <button className="bg-primary text-blue-10 px-4 rounded-lg h-[40px] leading-none flex items-center mt-4 pb-0.5">
            {TRANSLATIONS['cta.updatePreferences']}
          </button>
        </div>
      </form>
    </nav>
  );
};

export default UserOptions;
