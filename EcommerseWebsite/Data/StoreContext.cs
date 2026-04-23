using EcommerseWebsite.Models;
using Microsoft.EntityFrameworkCore;

namespace EcommerseWebsite.Data
{
    public class StoreContext(DbContextOptions<StoreContext> option) : DbContext(option)
    {
        public DbSet<Product> Products { get; set; }
    }
}
