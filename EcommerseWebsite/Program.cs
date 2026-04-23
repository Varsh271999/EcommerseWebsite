using EcommerseWebsite.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(option =>
{
    option.UseSqlServer(builder.Configuration.GetConnectionString("DefualtConnection"));
});

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

Dbinitializer.InitDb(app);

app.Run();
