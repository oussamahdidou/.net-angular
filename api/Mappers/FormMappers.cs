using api.Dto;
using api.Models;

namespace api.Mappers
{
    public static class FormMappers
    {
        public static Formulaire CreateDtoToModel(this CreateFormDto createFormDto, string AppUserId)
        {
            return new Formulaire
            {
                AppUserId = AppUserId,
                Inputs = createFormDto.Fields.Select(x => new Input()
                {
                    Label = x.Label,
                    Type = x.Type,
                    DefaultValue = x.DefaultValue,
                    Required = x.Required,
                    Name = x.Name,
                    Placeholder = x.Placeholder,
                    Options = x.Options.Select(y => new Option()
                    {
                        Value = y
                    }).ToList(),
                }).ToList(),
            };
        }
    }
}