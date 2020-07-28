module Jekyll
    class CacheTag < Liquid::Tag

        def initialize(tag_name, text, tokens)
            super
            @text = text
        end

        def render(context)
            time = Time.new
            "#{@text.strip}?cache=#{time.strftime("%-d%9N")}"
        end
    end

    module CacheFilter
        def cachetag(input)
            puts "Nil cachetag input! Did you put it in quotes?" if !input
            time = Time.new
            "#{input.to_s.strip}?cache=#{time.strftime("%-d%9N")}"
        end
    end
end
  
Liquid::Template.register_tag('cachetag', Jekyll::CacheTag)
Liquid::Template.register_filter(Jekyll::CacheFilter)
