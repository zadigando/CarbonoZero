using FilmesApi.Data;
using FilmesApi.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connectionStrings = builder.Configuration.GetConnectionString("CarbonoZeroConnection");

builder.Services.AddDbContext<CarbonozeroContext>(opts => opts.UseMySql(connectionStrings, ServerVersion.AutoDetect(connectionStrings)));

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add services to the container.
builder.Services.AddControllers();

// Configurar o CORS específico para o Angular
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev",    
        builder => builder.WithOrigins("http://localhost:4200")
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Configurar o CORS específico para o Angular
app.UseCors("AllowAngularDev");

app.UseAuthorization();

app.MapControllers();

app.Run();
