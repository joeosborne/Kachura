using System;

namespace Kachura.Films.Data.Models
{
  public class User
  {
    public int Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public DateTime RegistrationDate { get; set; }
    public DateTime? LastLogin { get; set; }
    public bool IsActive { get; set; }
  }
}
