using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace csharp_entityframework.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            var categories = new List<Category>()
            {
                new Category() { Name = "Category 1" },
                new Category() { Name = "Category 2" },
                new Category() { Name = "Category 3" },
                new Category() { Name = "Category 4" },
                new Category() { Name = "Category 5" },
                new Category() { Name = "Category 6" },
                new Category() { Name = "Category 7" }
            };
            return Ok(categories);
        }
    }
}
