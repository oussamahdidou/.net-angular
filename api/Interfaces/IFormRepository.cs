using api.Dto;
using api.Models;

namespace api.Interfaces
{
    public interface IFormRepository
    {
        Task<Formulaire> GetFormulaireByIdAsync(string id);
        Task<List<Formulaire>> GetAllFormulairesAsync(string Id);
        Task<Formulaire> CreateFormulaireAsync(CreateFormDto createFormDto, string AppUserId);
    }
}
