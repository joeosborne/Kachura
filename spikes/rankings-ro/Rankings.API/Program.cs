var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200",
                                              "https://localhost:4200");
                      });
});



var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();


var weightDivisions = new List<WeightDivision>
{
new WeightDivision(1, "ALL WEIGHTS", "NONE"),
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
new WeightDivision(18, "Strawweight", "")
};

app.MapGet("/weights", () =>
{
    return weightDivisions;
});


app.Run();


internal record WeightDivision(int Id, string Name, string Limit);
internal record Boxer(int Id, string FullName, int WeightDivisionId, int Won, int Lost, int Drawn);