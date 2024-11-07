namespace CricketTeam
{
    public class TeamValidator
    {

        public bool TeamIsValid(List<Cricketer> team)
        {
            //// team must have 11 players
            if (team.Count != 11)
            {
                return false;
            }
            //// team must have at least 5 batsmen - see roles in Role.cs
            //if (team.Count(c => c.Role == Role.Batsman) < 5)
            //{
            //    return false;
            //}
            //// team must have at least 1 wicketkeeper - see roles in Role.cs


            return true;
        }

    }

}
