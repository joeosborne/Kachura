using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace WebApplication1
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddSignalR().AddAzureSignalR();
            //string azureSignalrConnectionString = System.Configuration[];
            services.AddSignalR().AddAzureSignalR(options =>
            {
                options.ConnectionString = "Endpoint=https://aft-signalr-dev.service.signalr.net;AccessKey=TbVjIaI+MBEYBhq0AeCIsGqZfY87VLZtaI/0+Lno8Ao=;Version=1.0";
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseDefaultFiles();
            //app.UseStaticFiles();

            app.UseFileServer();
            app.UseRouting();
            app.UseAuthorization();

            app.UseEndpoints(routes =>
            {
                routes.MapHub<InfoRelay>("/InfoRelay");
            });
        }
    }
}
