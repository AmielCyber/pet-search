﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PetSearch.Data;

#nullable disable

namespace PetSearch.Data.Migrations
{
    [DbContext(typeof(PetSearchContext))]
    partial class PetSearchContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("PetSearch.Data.Entity.Token", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("AccessToken")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("ExpiresIn")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.ToTable("Tokens");
                });
#pragma warning restore 612, 618
        }
    }
}
