import React, { useEffect, useState } from 'react'
import AllTeamsTable from '../../components/AllTeamsTable';
import TeamsGrid from '../../components/TeamsGrid';
import ViewToggle from '../../components/ViewToggle';

const VIEW_STORAGE_KEY = 'nhlzone.teamsView';

function Summary(props) {
    const { tableHeaders, tableData } = props;

    // Remember the user's grid/table choice across navigation.
    const [view, setView] = useState(() => {
        try {
            return localStorage.getItem(VIEW_STORAGE_KEY) || 'grid';
        } catch {
            return 'grid';
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(VIEW_STORAGE_KEY, view);
        } catch {
            /* ignore storage failures (e.g. private mode) */
        }
    }, [view]);

    return (
        <div className="container py-6 lg:px-10">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <h2 className="font-display text-3xl font-extrabold uppercase tracking-wide text-slate-100">
                        Teams
                    </h2>
                    <p className="text-sm text-slate-400">All 32 NHL clubs — tap a team for stats and roster.</p>
                </div>
                <ViewToggle view={view} onChange={setView} />
            </div>

            {view === 'grid'
                ? <TeamsGrid teams={tableData} />
                : <AllTeamsTable tableHeaders={tableHeaders} tableData={tableData} />}
        </div>
    )
};
export default Summary;
