using api.Dto;
using api.Extensions;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly IFormRepository formRepository;
        private readonly UserManager<AppUser> userManager;

        public FormController(IFormRepository formRepository, UserManager<AppUser> userManager)
        {
            this.formRepository = formRepository;
            this.userManager = userManager;
        }
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateFormulaireAsync([FromBody] CreateFormDto createFormDto)
        {
            string username = User.GetUsername();
            AppUser? appUser = await userManager.FindByNameAsync(username);
            Formulaire formulaire = await formRepository.CreateFormulaireAsync(createFormDto, appUser.Id);
            return Ok(formulaire);
        }
    }
}
