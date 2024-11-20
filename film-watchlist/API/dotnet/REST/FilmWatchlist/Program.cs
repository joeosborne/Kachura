//private readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

using Movies.Application;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.





builder.Services.AddCors(options =>
{
    // todo: correct all of these settings
    options.AddPolicy("AllowOrigin", builder =>
        {
            builder.WithOrigins(
    "http://localhost:4200",
    "https://localhost:4200"
    )
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials();
        });


    //options.AddPolicy(
    //name: "AllowOrigin",
    //builder => {
    //    builder.AllowAnyOrigin()
    //            .AllowAnyMethod()
    //            .AllowAnyHeader();
    //});

});

builder.Services.AddControllers();
builder.Services.AddApplication();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("AllowOrigin");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
