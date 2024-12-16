using System.Diagnostics.CodeAnalysis;

namespace FeatureSwitching;

public class Feature
{
    [FeatureSwitchDefinition("Feature.IsEnabled")]
    internal static bool IsFeatureEnabled =>
        !AppContext.TryGetSwitch("Feature.IsEnabled", out var isEnabled) || isEnabled;
    
    internal static void DoTheThing()
    {
        Console.WriteLine("I did a thing!");
    }
}
