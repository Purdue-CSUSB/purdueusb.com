# -*- encoding: utf-8 -*-
# stub: jekyll-purgecss 0.3.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-purgecss".freeze
  s.version = "0.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "changelog_uri" => "https://www.github.com/mhanberg/jekyll-purgecss", "source_code_uri" => "https://www.github.com/mhanberg/jekyll-purgecss" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Mitchell Hanberg".freeze]
  s.bindir = "exe".freeze
  s.date = "2020-02-07"
  s.description = "A PurgeCSS plugin for Jekyll.".freeze
  s.email = ["mitch@mitchellhanberg.com".freeze]
  s.homepage = "https://www.github.com/mhanberg/jekyll-purgecss".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.4".freeze
  s.summary = "A PurgeCSS plugin for Jekyll.".freeze

  s.installed_by_version = "3.1.4" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.17"])
    s.add_development_dependency(%q<jekyll>.freeze, [">= 2.0"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_development_dependency(%q<rubocop-jekyll>.freeze, ["~> 0.3.0"])
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.17"])
    s.add_dependency(%q<jekyll>.freeze, [">= 2.0"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<rubocop-jekyll>.freeze, ["~> 0.3.0"])
  end
end
