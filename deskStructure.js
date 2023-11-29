import {
  EditIcon,
  CogIcon, 
  DocumentIcon,
  SchemaIcon,
  PackageIcon,
  StarIcon,
  ComponentIcon,
  ChartUpwardIcon,
  EarthGlobeIcon,
  MenuIcon,
  FolderIcon,
  CodeBlockIcon,
  LinkIcon,
  ClipboardIcon,
} from '@sanity/icons'





export const myStructure = (S) =>

  S.list()
    .title('Content')
    .items([
        /* Delete list */  
        ...S.documentTypeListItems().filter(
          (listItem) => !['ProductPage','page','subcategory','productCategory', 'productPage',
          'productLinks', 'media.tag', "avatar",
          "button", "ButtonLink", "Carousel", 
          "Divider", "Label", "logo",
          "PartnerLink", "StaticRating",
          "TextLink", "banner", "ContentCard",
          "ContentMask", "ContentPoints",
          "DrawerModal", "InformationBar",
          "PartnerCard", "PriceCard", "Review",
          "ReviewCounter", "SearchField",
          "VideoBannerBoxed", "CarouselSection",
          "ContentCardSection", "ContentPointsSection",
          "Footer", "Header", "IntroSection", "PriceSection",
          "ProductHeader", "RelatedProducts", "ReviewSection",
          "TextSection", "partnerLinks", "partnerClaims",
           'post', 'author', 'category'].includes(listItem.getId())
        ),
    
        
     
     S.listItem()
      .title('Categories')
      .icon(()=> "🔠")
      .child(
        S.documentTypeList('category')
          .title('Categories')
          .child((categoryId) =>
          S.documentTypeList('subcategory')
          .title('Subcategories')
          .filter('_type == "subcategory" && references($categoryId)')
          .params({ categoryId })
          )
          ),




          // partners

          S.listItem()
          .title('Partners')
          .icon(() => '🏢') // Replace with a suitable icon
         .child(
            S.list()
              .title('Partners')
              .items([
                // Add "Partner Links" as a list item
                S.listItem()
                  .title('Partner Links')
                  .icon(() => '🔗') // Replace with a suitable icon
                  .child(
                    S.documentTypeList('partnerLinks')
                      .title('Partner Links')
                      .filter('_type == "partnerLinks"')
                  ),
      
                // Add "Partner Claims" as a list item
                S.listItem()
                  .title('Partner Claims')
                  .icon(() => '🔗') // Replace with a suitable icon
                  .child(
                    S.documentTypeList('partnerClaims')
                      .title('Partner Claims')
                      .filter('_type == "partnerClaims"')
                  ),

                  S.divider(),

                  S.listItem()
                  .title('All Partners')
                  .showIcon(false)
                  .child(
                    S.documentTypeList('ProductPage')
                      .title('All Partners')
                      
                      .filter('_type == "ProductPage"')
                  ),


                   // New list item for filtering by category
                    S.listItem()
                    .title('Filter by: Category')
                    .showIcon(false)
                    .child(
                      // List of categories
                      S.documentTypeList('category')
                        .title('Filter by: Category')
                        .child((categoryId) =>
                          // List of products filtered by the selected category
                          S.documentList()
                            .title('Products')
                            .filter('_type == "ProductPage" && references($categoryId)')
                            .params({ categoryId })
                        )
                    ),
              ]),

              
              
          ),

          

        // /* Products */
        // S.listItem()
        // .title('Products')
        // .icon (PackageIcon)
        // .child (
        //   S.list()
        //     .title('Products')
        //     .items([
        //       /* All products */
        //       S.listItem()
        //       .title('Products')
        //       .child (
        //         S.documentTypeList ('productPage')
        //           .title('Product pages')
        //         ),
        //       /* Filter by: category */
        //       S.listItem()
        //       .title('Filter products by: category'),
        //       S.divider(),
        //       /* Product links */
        //       S.listItem()
        //         .title('Product links')
        //         .icon (LinkIcon)
        //         .child (
        //           S.documentTypeList ('productLinks')
        //             .title('Product links')
        //           ),
        //       /* Product claims */
        //       S.listItem()
        //       .title('Product claims')
        //       .icon (ClipboardIcon)
        //     ])
        // ),

        // /* Pages */
        // S.listItem()
        // .title('Pages')
        // .icon (DocumentIcon),
      
        //  /* Blog */
        //  S.listItem()
        // .title('Blog')
        // .icon (EditIcon)
        // .child(
        //   /* Blog items */
        //   S.list()
        //     .title('Blog')
        //     .items([
        //       /* All posts */
        //       S.listItem()
        //       .title('All Posts')
        //       .child(
        //         S.documentTypeList('post')
        //           .title('All Posts')
        //       ),
              
        //       S.divider(),



        //       /* Filter by category */       
        //       S.listItem()
        //       .title('Filter by: category')
        //       .child(
        //         S.documentTypeList('category')
        //           .title('Filter by: category')
        //           .child(categoryId =>
        //             S.documentList()
        //               .title('Posts')
        //               .filter('_type == "post" && $categoryId in categories[]._ref')
        //               .params({ categoryId })
        //           )
        //       ),
        //       /* Filter by author */
        //         S.listItem()
        //         .title('Filter by: author')
        //         .child(
        //           S.documentTypeList('author')
        //             .title('Filter by: author')
        //             .child(authorId =>
        //               S.documentList()
        //                 .title('Posts')
        //                 .filter('_type == "post" && $authorId == author._ref')
        //                 .params({ authorId })
        //             )
        //         ),
        //     ])
        // ),
        
        // /* Reviews */
        // S.listItem()
        // .title('Reviews')
        // .icon (StarIcon),
         
        /* Settings */
        S.listItem()
        .title('Settings')
        .icon (CogIcon)
        .child(
          S.list()
            .title('Settings')
            .items([
              /* General */
              S.listItem()
              .title('General')
              .icon (EarthGlobeIcon),

              /* Analytics */
              S.listItem()
              .title('Analytics')
              .icon (ChartUpwardIcon),

              /* Menu */
              S.listItem()
              .title('Menu')
              .icon (MenuIcon),

              /* Footer */
              S.listItem()
              .title('Footer')
              .icon (FolderIcon),

              /* Cookies */
              S.listItem()
              .title('Cookies')
              .icon (CodeBlockIcon),

              /* Components */
              S.listItem()
              .title('Components')
              .icon (ComponentIcon)
              .child (
                S.list()
                  .title('Components')
                  .items([

                        // atoms start
                    S.listItem()
                    .title('Atoms')
                    .icon(ComponentIcon)
                    .child(
                    
                        S.list()
                       .title('Atoms')
                       .items([

                        //each child folder
                        S.listItem()
                          .title('Logos')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('logo')
                              .title('Logos')
                          ),
    
                        S.listItem()
                          .title('Buttons')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('button')
                              .title('Buttons')
                          ),


                          S.listItem()
                          .title('Avatars')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('avatar')
                              .title('Avatars')
                          ),

                          S.listItem()
                          .title('Button Links')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('ButtonLink')
                              .title('Button Links')
                          ),

                          S.listItem()
                          .title('Carousels')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('Carousel')
                              .title('Carousels')
                          ),

                          S.listItem()
                          .title('Partner Links')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('PartnerLink')
                              .title('Partner Links')
                          ),

                          S.listItem()
                          .title('Text Links')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('TextLink')
                              .title('Text Links')
                          ),



    
                      ])
                  
                    ),

                    // molecules
                    S.listItem()
                    .title('Molecules')
                    .icon(ComponentIcon)
                    .child(
                    
                        S.list()
                       .title('Molecules')
                       .items([

                        //each child folder
                        S.listItem()
                          .title('Banners')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('banner')
                              .title('Banners')
                          ),

                          S.listItem()
                          .title('Content Cards')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('ContentCard')
                              .title('Content Cards')
                          ),

                          S.listItem()
                          .title('Content Points')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('ContentPoints')
                              .title('Content Points')
                          ),

                          S.listItem()
                          .title('Drawer Modal')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('DrawerModal')
                              .title('Drawer Modal')
                          ),


                          S.listItem()
                          .title('Information Bars')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('InformationBar')
                              .title('Information Bars')
                          ),

                          S.listItem()
                          .title('Price Cards')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('PriceCard')
                              .title('Price Cards')
                          ),

                          S.listItem()
                          .title('Review')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('Review')
                              .title('Review')
                          ),

                          S.listItem()
                          .title('Review Counters')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('ReviewCounter')
                              .title('Review Counters')
                          ),

                          S.listItem()
                          .title('Search Fields')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('SearchField')
                              .title('Search Fields')
                          ),

                          S.listItem()
                          .title('Video Banners')
                          .icon(FolderIcon)
                          .child(
                            S.documentTypeList('VideoBannerBoxed')
                              .title('Video Banners')
                          ),

                         
  
  
  
                      ])),
                     
                     // Organisms
                     S.listItem()
                     .title('Organisms')
                     .icon(ComponentIcon)
                     .child(
                     
                         S.list()
                        .title('Organisms')
                        .items([
 
                         //each child folder
                        
 
                           S.listItem()
                           .title('Carousel Sections')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('CarouselSection')
                               .title('Carousel Sections')
                           ),

                           S.listItem()
                           .title('ContentCard Sections')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('ContentCardSection')
                               .title('ContentCard Sections')
                           ),

                           S.listItem()
                           .title('ContentPoints Sections')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('ContentPointsSection')
                               .title('ContentPoints Sections')
                           ),

                           S.listItem()
                           .title('Footers')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('Footer')
                               .title('Footers')
                           ),

                           S.listItem()
                           .title('Headers')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('Header')
                               .title('Headers')
                           ),

                           S.listItem()
                           .title('Intro Sections')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('IntroSection')
                               .title('Intro Sections')
                           ),

                           S.listItem()
                           .title('Price Sections')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('PriceSection')
                               .title('Price Sections')
                           ),

                          

                           S.listItem()
                           .title('Product Headers')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('ProductHeader')
                               .title('Product Headers')
                           ),

                           S.listItem()
                           .title('Related Products')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('RelatedProducts')
                               .title('Related Products')
                           ),

                           S.listItem()
                           .title('Review Sections')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('ReviewSection')
                               .title('Review Sections')
                           ),

                           S.listItem()
                           .title('Text Sections')
                           .icon(FolderIcon)
                           .child(
                             S.documentTypeList('TextSection')
                               .title('Text Sections')
                           ),
 
                          
   
   
   
                       ])),
                   

                     
                  ])
              ),




              S.listItem()
              .title('Categories')
              .icon(SchemaIcon)
              .child(

                    S.list()
                   .title('Categories Folder')
                   .items([
                    S.listItem()
                      .title('Categories')
                      .icon(SchemaIcon)
                      .child(
                        S.documentTypeList('category')
                          .title('Categories')
                      ),

                    S.listItem()
                      .title('Subcategories')
                      .icon(SchemaIcon)
                      .child(
                        S.documentTypeList('subcategory')
                          .title('Subcategories')
                      ),

                  ])
              ),


            ])
        )
      ])

      const JsonPreview = ({document}) => (
        <>
          <h1>JSON Data for "{document.displayed.title}"</h1>
          <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
        </>
      )

      export const defaultDocumentNodeResolver = (S) =>
      S.document().views([
     // Give all documents the JSON preview, 
    // as well as the default form view
    S.view.form(),
    S.view.component(JsonPreview).title('JSON')
  ])
      