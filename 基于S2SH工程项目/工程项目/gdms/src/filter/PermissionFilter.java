package filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import entity.per_entity.Person;

/**
 * Servlet Filter implementation class PermissionFilter
 */
@WebFilter("/PermissionFilter")
public class PermissionFilter implements Filter {

    public PermissionFilter() {
    }

	public void destroy() {
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest myrequest = (HttpServletRequest)request;
		HttpSession hs = myrequest.getSession(false);
		HttpServletResponse myResponse = (HttpServletResponse)response;
		
		if(hs==null)
		{
			myResponse.sendRedirect(myrequest.getContextPath()+"/signin.jsp");
		}
		else
		{
			Person p = (Person)hs.getAttribute("person");
			if(p==null)
			{
				myResponse.sendRedirect(myrequest.getContextPath()+"/signin.jsp");
			}
		}
		chain.doFilter(request, response);
		
	}
	
	public void init(FilterConfig fConfig) throws ServletException {
	}

}
