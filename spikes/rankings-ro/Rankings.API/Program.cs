var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200",
                                              "https://localhost:4200",
                                              "http://localhost:7151",
                                              "https://localhost:7151")
                             .AllowAnyMethod()
   .AllowAnyHeader()
   //.AllowCredentials() // its optional for this answer
   .WithExposedHeaders("*"); // this is the code you need!
                      });






});



var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();


var weightDivisions = new List<WeightDivision>
{
new WeightDivision(1, "POUND FOR POUND", "NONE"),
new WeightDivision(2, "Heavyweight", "NONE"),
new WeightDivision(3, "Cruiserweight", "200 POUNDS"),
new WeightDivision(4, "Light Heavyweight", "175 POUNDS"),
new WeightDivision(5, "Super Middleweight", "168 POUNDS"),
new WeightDivision(6, "Middleweight", "160 POUNDS"),
new WeightDivision(7, "Junior Middleweight", "154 POUNDS"),
new WeightDivision(8, "Welterweight", "147 POUNDS"),
new WeightDivision(9, "Junior Welterweight", "140 POUNDS"),
new WeightDivision(10, "Lightweight", "135 POUNDS"),
new WeightDivision(11, "Junior Lightweight", "130 POUNDS"),
new WeightDivision(12, "Featherweight", "126 POUNDS"),
new WeightDivision(13, "Junior Featherweight", "122 POUNDS"),
new WeightDivision(14, "Bantamweight", "118 POUNDS"),
new WeightDivision(15, "Junior Bantamweight", "115 POUNDS"),
new WeightDivision(16, "Flyweight", "112 POUNDS"),
new WeightDivision(17, "Junior Flyweight", "108 POUNDS"),
new WeightDivision(18, "Strawweight", "105 POUNDS")
};

var boxers = new List<Boxer>
{
new Boxer(1, "Tyson Fury", "U.K", 2 , "20-0-0 (13 KOS)", true),
new Boxer(2, "OLEKSANDR USYK", "UKRAINE", 2 , "20-0-0 (13 KOS)"),
new Boxer(3, "DEONTAY WILDER", "U.S.", 2 , "43-2-1 (42 KOS)"),
new Boxer(4, "ANTHONY JOSHUA", "U.K.", 2 , "24-3-0 (22 KOS)"),
new Boxer(5, "JOE JOYCE", "U.K.", 2 , "15-0-0 (14 KOS)"),
new Boxer(6, "ANDY RUIZ JR.", "U.S.", 2 , "35-2-0 (22 KOS)"),
new Boxer(7, "DILLIAN WHYTE", "U.K.", 2 , "28-3-0 (19 KOS)"),
new Boxer(8, "LUIS ORTIZ", "CUBA", 2 , "33-3-0 (28 KOS)"),
new Boxer(9, "JOSEPH PARKER", "NEW ZEALAND", 2 , "30-3-0 (21 KOS)"),

new Boxer(1, "ERROL SPENCE JR.", "U.S.", 8 , "28-0-0 (22 KOS)"),
new Boxer(2, "TERENCE CRAWFORD", "U.S.", 8 , "38-0-0 (29 KOS)"),
new Boxer(3, "JARON ENNIS", "U.S.", 8 , "29-0-0 (27 KOS)"),
new Boxer(4, "YORDENIS UGAS", "CUBA", 8 , "27-5-0 (12 KOS)"),
new Boxer(5, "VERGIL ORTIZ JR.", "U.S.", 8 , "19-0-0 (19 KOS)"),
new Boxer(6, "EIMANTAS STANIONIS", "LITHUANIA", 8 , "14-0-0 (9 KOS)"),
new Boxer(7, "KEITH THURMAN", "U.S.", 8 , "30-1-0 (22 KOS)"),
new Boxer(8, "DAVID AVANESYAN", "RUSSIA", 8 , "29-3-1 (17 KOS)"),
new Boxer(9, "CONOR BENN", "U.K.", 8 , "21-0-0 (14 KOS)"),

};

app.MapGet("/weights", () =>
{
    return weightDivisions;
});

app.MapGet("/boxers", () =>
{
    return boxers;
});



app.Run();


internal record WeightDivision(int Id, string Name, string Limit);
internal record Boxer(int Ranking, string FullName, string Country, int WeightDivisionId, string Record, bool IsChampion = false);