using System;
using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using Xunit;
using Bogus;
using System.Numerics;
using CricketTeamPicker;
using NSubstitute;

public class TeamPickerTests
{
    private readonly List<Player> _testPlayers;

    // todo: watch the following and update tests accordingly..
    // https://www.youtube.com/watch?v=T9pwE1GAr_U

    public TeamPickerTests()
    {
        var faker = new Faker<Player>()
            .RuleFor(p => p.Name, f => f.Name.FullName())
            .RuleFor(p => p.Role, f => f.PickRandom(new[] { "Batsman", "Bowler", "All-Rounder", "Wicketkeeper" }))
            .RuleFor(p => p.CanBowl, (f, p) => p.Role is "Bowler" or "All-Rounder")
            .RuleFor(p => p.IsWicketKeeper, (f, p) => p.Role == "Wicketkeeper");

        // Generate a pool of 20 random players
        _testPlayers = faker.Generate(20);
    }

    //[Fact]
    //public void PickTeam_ShouldCreateAValidTeamWith11Players()
    //{
    //    // Arrange
    //    var teamPicker = new TeamPicker(_testPlayers);

    //    // Act
    //    var team = teamPicker.PickTeam();

    //    // Assert
    //    team.Should().NotBeNull();
    //    team.Count.Should().Be(11);
    //}

    //[Fact]
    //public void PickTeam_ShouldIncludeExactlyOneWicketKeeper()
    //{
    //    // Arrange
    //    var teamPicker = new TeamPicker(_testPlayers);

    //    // Act
    //    var team = teamPicker.PickTeam();

    //    // Assert
    //    team.Count(p => p.IsWicketKeeper).Should().Be(1);
    //}

    [Fact]
    public void todo()
    {
        // Arrange
        var mockDataSvc = Substitute.For<ICricketerDataService>();
        var picker = new TeamPicker(mockDataSvc);
        var mockPlayers = new List<Player>
            {

                new Player { Name = "Harry Brook", Role = "Batsman",  CanBowl = false },
                new Player { Name = "Ollie Pope", IsWicketKeeper = true, Role = "Batsman",  CanBowl = false },
                new Player { Name = "Mark Wood", Role = "Bowler",  CanBowl = true },
                new Player { Name = "Chris Woakes", Role = "All-Rounder",  CanBowl = true },
            };

        mockDataSvc.GetAvailablePlayers().Returns(mockPlayers);

        // Act
        var squad = picker.GetAvailablePlayers();

        // Assert
        Assert.Equal(4, squad.Count);
    }

    //[Fact]
    //public void PickTeam_ShouldIncludeAtLeastFiveBowlers()
    //{
    //    // Arrange
    //    var teamPicker = new TeamPicker(_testPlayers);

    //    // Act
    //    var team = teamPicker.PickTeam();

    //    // Assert
    //    team.Count(p => p.CanBowl).Should().BeGreaterOrEqualTo(5);
    //}

    //[Fact]
    //public void PickTeam_ShouldThrowException_WhenNotEnoughPlayers()
    //{
    //    // Arrange
    //    var insufficientPlayers = _testPlayers.Take(11).ToList();
    //    var teamPicker = new TeamPicker(insufficientPlayers);

    //    // Act
    //    Action action = () => teamPicker.PickTeam();

    //    // Assert
    //    action.Should().Throw<Exception>().WithMessage("Not enough players available to form a team!");
    //}

    //[Fact]
    //public void PickTeam_ShouldThrowException_WhenNoWicketKeeper()
    //{
    //    // Arrange
    //    var playersWithoutWicketKeeper = _testPlayers.Where(p => !p.IsWicketKeeper).ToList();
    //    var teamPicker = new TeamPicker(playersWithoutWicketKeeper);

    //    // Act
    //    Action action = () => teamPicker.PickTeam();

    //    // Assert
    //    action.Should().Throw<Exception>().WithMessage("No wicketkeeper available!");
    //}

    //[Fact]
    //public void PickTeam_ShouldThrowException_WhenNotEnoughBowlers()
    //{
    //    // Arrange
    //    var playersWithoutBowlers = _testPlayers.Where(p => !p.CanBowl).ToList();
    //    var teamPicker = new TeamPicker(playersWithoutBowlers);

    //    // Act
    //    Action action = () => teamPicker.PickTeam();

    //    // Assert
    //    action.Should().Throw<Exception>().WithMessage("Not enough bowlers available!");
    //}
}
