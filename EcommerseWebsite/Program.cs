using EcommerseWebsite.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("DefualtConnection"));
});
builder.Services.AddCors();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(opt=>
{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000", "https://localhost:3001");
});
app.MapControllers();

Dbinitializer.InitDb(app);

app.Run();
