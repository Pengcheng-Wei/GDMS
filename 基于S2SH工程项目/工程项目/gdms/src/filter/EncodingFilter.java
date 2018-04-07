package filter;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;


public class EncodingFilter implements Filter {

	protected String encoding=null;     
	protected FilterConfig filterConfig=null;     
	protected boolean ignore=true;     
	public void destroy() {

	}
	public void init(FilterConfig filterConfig) throws ServletException {

	}

	         
      public void doFilter(ServletRequest servletRequest,     
      ServletResponse servletResponse, FilterChain filterChain)     
      throws IOException, ServletException {         
      HttpServletRequest request = (HttpServletRequest) servletRequest;     
      HttpServletResponse response = (HttpServletResponse) servletResponse;          
      String requestedWith = request.getHeader("x-requested-with");     
      String type = request.getContentType();     
      if (requestedWith != null && "XMLHttpRequest".equals(requestedWith)     
      && null != type     
      && ("application/x-www-form-urlencoded".equals(type)||"application/x-www-form-urlencoded; charset=UTF-8".equals(type))) {           
      request.setCharacterEncoding("UTF-8");     
      response.setCharacterEncoding("UTF-8");     
      request.getParameterMap();     
      }  
                 
      filterChain.doFilter(request, response);           
      }     
}