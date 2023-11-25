using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComptabiliteAPi.Migrations
{
    /// <inheritdoc />
    public partial class description : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Factures");

            migrationBuilder.DropColumn(
                name: "FactureDate",
                table: "Factures");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Operations",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Operations");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Factures",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "FactureDate",
                table: "Factures",
                type: "datetime2",
                nullable: true);
        }
    }
}
