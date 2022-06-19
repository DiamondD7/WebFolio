using Microsoft.AspNetCore.Mvc;

namespace WebFolio.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
