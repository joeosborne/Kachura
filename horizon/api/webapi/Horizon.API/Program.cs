using Microsoft.AspNetCore.Http.HttpResults;
using System.IO;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();


app.MapGet("/counsellors", () =>
{
    var counsellors = new List<Counsellor>(){ 
        new Counsellor(1, "Alan", "Partridge",     "0064", "You feel the need to talk freely, to be heard and understood. Together we will determine the source of your difficulties, confront them and successfully evacuate them. The goal is to move towards a well-being.",
        "Anxiety, Phobias, Bereavement, Career, Redundancy, Stress, Work - related issues."),
        new Counsellor(2, "Bob", "Smith",
        "0092", "Lorem ipsum. Yada yada yada",
        "Bereavement, Career, Anxiety, Stress"), };


    return counsellors;
});

app.Run();


// todo: add support for schedule
internal record Counsellor(int Id, string FirstName, string Surname, string Code, string Profile, string Specialities)
{

}
