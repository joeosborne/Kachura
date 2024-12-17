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

    [Fact]
    public void GetAvailablePlayers_Should_Return_Correct_Players()
    {
        // Arrange
        var mockDataSvc = Substitute.For<ICricketerDataService>();
        var picker = new TeamPicker(mockDataSvc);

        mockDataSvc.GetAvailablePlayers().Returns(_testPlayers);

        // Act
        var squad = picker.GetAvailablePlayers();

        // Assert
        Assert.Equal(20, squad.Count);
    }

    [Fact]
    public void PickTeam_ShouldIncludeAtLeastFiveBowlers()
    {
        // Arrange
        var mockDataSvc = Substitute.For<ICricketerDataService>();
        var teamPicker = new TeamPicker(mockDataSvc);

        // Act
        var result = teamPicker.IsTeamValid(_testPlayers);

        // Assert
        Assert.Equal(true, result);
    }

    [Fact]
    public void PickTeam_ShouldThrowException_WhenNoWicketKeeper()
    {
        // Arrange
        var playersWithoutWicketKeeper = _testPlayers.Where(p => !p.IsWicketKeeper).ToList();
        var mockDataSvc = Substitute.For<ICricketerDataService>();
        var teamPicker = new TeamPicker(mockDataSvc);

        // Act
        Action action = () => teamPicker.IsTeamValid(playersWithoutWicketKeeper);

        // Assert
        action.Should().Throw<Exception>().WithMessage("No wicketkeeper available!");
    }

    [Fact]
    public void PickTeam_ShouldThrowException_WhenNotEnoughBowlers()
    {
        // Arrange
        var playersWithoutBowlers = _testPlayers.Where(p => !p.CanBowl).ToList();
        var mockDataSvc = Substitute.For<ICricketerDataService>();
        var teamPicker = new TeamPicker(mockDataSvc);

        // Act
        Action action = () => teamPicker.IsTeamValid(playersWithoutBowlers);

        // Assert
        action.Should().Throw<Exception>().WithMessage("Not enough bowlers available!");
    }
}
