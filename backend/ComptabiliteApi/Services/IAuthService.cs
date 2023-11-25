using ComptabiliteAPi.VModels;

namespace ComptabiliteAPi.Services
{
    public interface IAuthService
    {
        Task<(int, string)> Registeration(RegistrationModel model);
        Task<(int, string)> Login(LoginModel model);
    }
}
