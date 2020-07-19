function isURL(str)
{
 var regexp = /https?:\/\/www./;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          alert("Please enter a URL with http or https prefix, e.g. https://www.udacity.com");
          return false
        }
}

export { isURL }
