//private readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

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

var app = builder.Build();

// Configure the HTTP request pipeline.


////app.UseHttpsRedirection();

////app.UseStaticFiles(); // 🔴 here it is
////app.UseRouting(); // 🔴 here it is
app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("AllowOrigin");

app.UseAuthentication();

app.UseAuthorization();
app.UseAuthorization();

app.MapControllers();

app.Run();
