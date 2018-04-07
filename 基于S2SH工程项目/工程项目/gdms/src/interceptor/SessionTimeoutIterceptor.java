package interceptor;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

import entity.per_entity.Person;

/**
*
* @author Allen      
* @created 2017年8月25日   
* 
*/
@SuppressWarnings("serial")
public class SessionTimeoutIterceptor extends AbstractInterceptor {

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		ActionContext ctx=invocation.getInvocationContext();
        Person user=(Person)ctx.getSession().get("person");
        if(user!=null){
            return invocation.invoke();
        }
        return "timeout";
	}

}
