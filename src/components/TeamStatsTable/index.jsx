import React from 'react';

// Components
import TeamHero from '../TeamHero';
import StatTileGrid from '../StatTileGrid';
import RosterSection from '../RosterSection';
import StatsKeyList from './StatsKeyList';

// Composition root for a single team's detail page. `allStats` carries the
// stats plus (when available) team metadata and the roster. Everything is
// optional-friendly so the component still renders with minimal props.
function TeamStatsTable(props) {
    const { allStats = {} } = props;
    const {
        numericalStats,
        leagueRanking,
        teamName,
        logo,
        abbrev,
        city,
        conference,
        division,
        roster,
    } = allStats;

    return (
        <div className="container my-6 space-y-10">
            <TeamHero
                teamName={teamName}
                logo={logo}
                abbrev={abbrev}
                city={city}
                conference={conference}
                division={division}
                numericalStats={numericalStats}
                leagueRanking={leagueRanking}
            />

            <section>
                <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-wider text-slate-200">
                    Season Stats
                </h3>
                <StatTileGrid numericalStats={numericalStats} leagueRanking={leagueRanking} />
            </section>

            <section>
                <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-wider text-slate-200">
                    Roster
                </h3>
                <RosterSection roster={roster} />
            </section>

            <section>
                <h3 className="mb-3 font-display text-base font-bold uppercase tracking-wider text-slate-400">
                    Stats Key
                </h3>
                <StatsKeyList />
            </section>
        </div>
    );
}

export default TeamStatsTable;
