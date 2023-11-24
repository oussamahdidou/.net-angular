using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComptabiliteAPi.Migrations
{
    /// <inheritdoc />
    public partial class ProjectTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Factures",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrixUnitaire = table.Column<float>(type: "real", nullable: true),
                    Quantite = table.Column<int>(type: "int", nullable: false),
                    PrixHT = table.Column<float>(type: "real", nullable: false),
                    PrixTVA = table.Column<float>(type: "real", nullable: false),
                    FactureDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    id_company = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    id_operateur = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Factures", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Libellations",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    id_Operation = table.Column<int>(type: "int", nullable: false),
                    id_Facture = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Libellations", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Operations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    id_company = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    compte_debiteurs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_compte_debiteurs = table.Column<int>(type: "int", nullable: false),
                    compte_crediteurs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_compte_crediteurs = table.Column<int>(type: "int", nullable: false),
                    id_Facure = table.Column<int>(type: "int", nullable: false),
                    est_comptabilise = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Operations", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Factures");

            migrationBuilder.DropTable(
                name: "Libellations");

            migrationBuilder.DropTable(
                name: "Operations");
        }
    }
}
