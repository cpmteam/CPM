CPM
===

Cache Package Manager

1. Need any container - XML ok
2. at the moment using xml for metainfo: i.e. metainfo.xml
   - later on may use JSON, or TOML
3. Fields in metainfo.xml will be modelled using package.json as example;
5. build should be available for source code modules written in C/C++
6. unit-testing is required for such modules
7. Unit-testing: there no unit-testing in package.json, should introduce something similar to Perl CPAN
8. command-line package manager is BAT wrapper calling COS shell;
9. it should be generalized similar to pl2bat which convert COS script to BAT executable;
10. site :  there will be 2 parts:
 - dynamic part where upload;
 - static part on CDN;


11.We need good examples:
  > iknowSocial - good;
  > Atom-COS-Studio - mixed (bad)
  > webterminal - good
  > CNA - binary (bad)
  > coslint - OBJ (good for deployed mode)

%CPM is accessible everywhere
d ^%CPM
 #install package ; install loccally
 #install global package ; install globally to %ALL