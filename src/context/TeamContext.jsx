import React, { createContext, useState, useEffect, useMemo } from "react";
import teamData from "/src/teams.json";

// Create the context
export const TeamsContext = createContext();

// Teams provider component
export const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [teamNames, setTeamNames] = useState([]);
  const [teamNamesAndIds, setTeamNamesAndIds] = useState([]);
  const [teamOverviews, setTeamOverviews] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null); // State for the selected team

  // Effect to fetch team data from JSON file
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("/teams.json");
        const data = await response.json();
        console.log("Teams data:", data);

        setTeams(data);
        setTeamNames(data.map((team) => team.teamName));
        setTeamOverviews(data.map((team) => team.teamOverview));
        setTeamMembers(data.map((team) => team.members));
        const namesAndIds = data.map((team) => ({
          teamId: team.id,
          teamName: team.teamName,
        }));
        setTeamNamesAndIds(namesAndIds);
      } catch (error) {
        console.error("Error fetching teams data:", error);
      }
    };

    fetchTeams();
  }, []);

  // Function to get team by ID
  const getTeamById = (teamId) => {
    const team = teams.find((t) => t.id === teamId);
    setSelectedTeam(team);
    console.log("Selected team:", team);
  };

  const selectedTeamName = selectedTeam ? selectedTeam.teamName : null;
  const selectedTeamOverview = selectedTeam ? selectedTeam.teamOverview : null;
  const selectedTeamMembers = selectedTeam ? selectedTeam.members : null;
  console.log(teamNamesAndIds);

  // Memoized values
  const contextValue = useMemo(
    () => ({
      teams,
      teamNames,
      teamNamesAndIds,
      teamOverviews,
      teamMembers,
      getTeamById,
      selectedTeam, // Add selectedTeam to context
      selectedTeamName,
      selectedTeamOverview,
      selectedTeamMembers,
    }),
    [teams, teamNames, teamOverviews, teamMembers, selectedTeam],
  );

  return (
    <TeamsContext.Provider value={contextValue}>
      {children}
    </TeamsContext.Provider>
  );
};
