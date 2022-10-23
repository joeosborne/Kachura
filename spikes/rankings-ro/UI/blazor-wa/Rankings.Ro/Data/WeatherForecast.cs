namespace Rankings.Ro.Data
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }

    // todo: de-dupe these records (also in minimal API)
    public record WeightDivision(int Id, string Name, string Limit);
    public record Boxer(int Ranking, string FullName, string Country, int WeightDivisionId, string Record, bool IsChampion = false);
}