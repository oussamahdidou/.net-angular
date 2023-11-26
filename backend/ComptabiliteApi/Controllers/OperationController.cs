using ComptabiliteAPi.DATA;
using ComptabiliteAPi.Models;
using ComptabiliteAPi.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using System.Security.Claims;

namespace ComptabiliteAPi.Controllers
{
   [Route("api/[controller]")]
    [ApiController]
    public class OperationController : ControllerBase
    {
        public readonly IOperationService operationservice;
       public readonly UserManager<User> _userManager;
        public OperationController(UserManager<User>userManager,IOperationService operationservice )
        {
            this.operationservice = operationservice;
            _userManager = userManager;
            
        }
        
        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme,Roles =UserRoles.Admin)]
        [Route("GetOperations")]
        public async Task<IActionResult> GetOperations()
        {
             ClaimsPrincipal currentUser = HttpContext.User;
                string userId = currentUser.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                var userobject=await _userManager.FindByIdAsync(userId);
                return Ok(userobject);
            


            //var (status,message)= await operationservice.GetOperationsAll("");
            //if (status == 0)
            //{
            //    return Ok(currentUser);
            //}
            //else
            //{
            //    return Ok(message);
            //}

        }
    }
}
