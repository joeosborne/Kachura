namespace FilmWatchlist.Api;

public static class ApiEndpoints
{
    private const string ApiBase = "api";
    
    public static class FilmWatchlist
    {
        private const string Base = $"{ApiBase}/watchlist";

        public const string Create = Base;
        public const string Get = $"{Base}/{{id:int}}";
        public const string GetAll = Base;
        public const string Update = $"{Base}/{{id:int}}";
        public const string Delete = $"{Base}/{{id:int}}";
    }
}
