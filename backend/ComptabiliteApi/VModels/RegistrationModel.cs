using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace ComptabiliteAPi.VModels
{
    public class RegistrationModel
    {
        [Required(ErrorMessage = "User Name is required")]
        public string? username { get; set; }
        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string? mail { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string? password { get; set; }
        public string? confirmpassword { get; set; }
        [Required(ErrorMessage = "Password is required")]

        public string? id_company { get; set; }
    }
}
