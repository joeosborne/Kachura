


using System;
using System.Collections.Generic;
using System.Linq;

namespace CricketTeamPicker
{

    public class TeamPicker
    {
        //private List<Player> availablePlayers = new List<Player>();
        private ICricketerDataService _cricketerDataService;


        public TeamPicker(ICricketerDataService cricketerDataService)
        {
            _cricketerDataService = cricketerDataService;
        }

        // todo: this class is intially setup so that "PickTeam" acts like auto selection. Change so that PickTeam accepts a team and validates it accordingly
        public bool IsTeamValid(List<Player> selectedTeam)
        {
            if (selectedTeam.Count < 11)
            {
                throw new Exception("Not enough players available to form a team!");
            }


            // Ensure one wicketkeeper
            Player wicketKeeper = selectedTeam.FirstOrDefault(p => p.IsWicketKeeper);
            if (wicketKeeper == null) { 
                throw new Exception("No wicketkeeper available!");
            }

            // Ensure at least 5 bowlers
            List<Player> bowlers = selectedTeam.Where(p => p.CanBowl).Take(5).ToList();
            if (bowlers.Count < 5)
            {
                throw new Exception("Not enough bowlers available!");
            }
            
            return true;
        }

        public IList<Player> GetAvailablePlayers()
        {
            var availablePlayers = _cricketerDataService.GetAvailablePlayers().ToList();
            return availablePlayers;
        }
    }
}