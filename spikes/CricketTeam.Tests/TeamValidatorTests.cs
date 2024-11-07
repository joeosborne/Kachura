
using CricketTeam;

public class TeamValidatorTests
{
    [Fact]
    public void TeamIsValid_ShouldReturnFalse_WhenTeamIsEmpty()
    {
        // Arrange
        var teamValidator = new TeamValidator();
        var team = new List<Cricketer>();

        // Act
        var result = teamValidator.TeamIsValid(team);

        // Assert
        Assert.False(result);
    }

    [Fact]
    public void TeamIsValid_ShouldReturnFalse_WhenTeamHasLessThan11Players()
    {
        // Arrange
        var teamValidator = new TeamValidator();
        var team = new List<Cricketer>
            {
                new Cricketer("Player1", 30, "CountryA", Role.Batsman, "Right-hand bat", "None"),
                new Cricketer("Player2", 28, "CountryA", Role.Bowler, "Left-hand bat", "Right-arm fast")
                // Add more players if needed, but less than 11
            };

        // Act
        var result = teamValidator.TeamIsValid(team);

        // Assert
        Assert.False(result);
    }

    [Fact]
    public void TeamIsValid_ShouldReturnTrue_WhenTeamHas11Players()
    {
        // Arrange
        var teamValidator = new TeamValidator();
        // extract the following code to a method

        List<Cricketer> team = GetValidTeam();

        // Act
        var result = teamValidator.TeamIsValid(team);

        // Assert
        Assert.True(result);
    }

    private static List<Cricketer> GetValidTeam()
    {
        return new List<Cricketer>
            {
                new Cricketer("Player1", 30, "CountryA", Role.Batsman, "Right-hand bat", "None"),
                new Cricketer("Player2", 28, "CountryA", Role.Bowler, "Left-hand bat", "Right-arm fast"),
                new Cricketer("Player3", 25, "CountryA", Role.Batsman, "Right-hand bat", "None"),
                new Cricketer("Player4", 27, "CountryA", Role.Batsman, "Right-hand bat", "None"),
                new Cricketer("Player5", 26, "CountryA", Role.Batsman, "Right-hand bat", "None"),
                new Cricketer("Player6", 29, "CountryA", Role.Bowler, "Left-hand bat", "Right-arm fast"),
                new Cricketer("Player7", 24, "CountryA", Role.Bowler, "Left-hand bat", "Right-arm fast"),
                new Cricketer("Player8", 23, "CountryA", Role.AllRounder, "Right-hand bat", "Right-arm fast"),
                new Cricketer("Player9", 22, "CountryA", Role.AllRounder, "Right-hand bat", "Right-arm fast"),
                new Cricketer("Player10", 21, "CountryA", Role.Wicketkeeper, "Right-hand bat", "None"),
                new Cricketer("Player11", 20, "CountryA", Role.Wicketkeeper, "Right-hand bat", "None")
            };
    }
}

