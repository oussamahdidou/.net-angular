using ComptabiliteAPi.Models;
using ComptabiliteAPi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;

namespace ComptabiliteAPi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationController : ControllerBase
    {
        public readonly IOperationService operationservice;
        public readonly UserManager<User> _userManager;
        public OperationController(IOperationService operationservice )
        {
            this.operationservice = operationservice;
            
        }
        [HttpGet]
        [Route("GetOperations")]
        public async Task<IActionResult> GetOperations()
        {
          //  var currentUser = await _userManager.GetUserAsync(User);
            //if (currentUser == null)
            //{
            //    return Unauthorized();
            //}
            var (status,message)= await operationservice.GetOperationsAll("");
            if (status == 0)
            {
                return Ok(message);
            }
            else
            {
                return Ok(message);
            }

        }
    }
}
