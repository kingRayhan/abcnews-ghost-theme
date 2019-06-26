jQuery(document).ready(function($) {
    $('.ham-burger').click(function() {
        $('body').toggleClass('menu-open')
        $('.header-panel').slideToggle()
    })
    // $('#grid').masonry({
    //   percentPosition: true,
    //     itemSelector: '.post-card',
    //     masonry: {
    //         columnWidth: '#grid-sizer',
    //     },
    // })
    //////////////////////////// 10. Load more posts JS ////////////////////////////////////
    var nextPage = $('link[rel=next]').attr('href'),
        a = $('.load-more-posts'),
        b = $('#grid')

    if (!nextPage) {
        b.addClass('d-none')
    }
    a.click(function(n) {
        n.preventDefault()
        var i = nextPage.split(/page/)[0] + 'page/' + pagination_next_page_number + '/'
        $.ajax({
            url: i,
            beforeSend: function() {
                a.html('<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>')
            },
        }).done(function(data) {
            a.html(`LOAD MORE <i class="fa fa-angle-down"></i>`)
            var posts = $('.post-card', data),
                postwrapper = $('#grid')
            postwrapper.append(posts)
            pagination_next_page_number++
            pagination_next_page_number > pagination_available_pages_number && a.addClass('d-none')
        })
    })
})

const searchInput = document.querySelector('#search-input')

searchInput.addEventListener('keyup', e => {
    if (!e.target.value.length) document.querySelector('.search-result').classList.add('d-none')
    else {
        document.querySelector('.search-result').classList.remove('d-none')
    }
})

new GhostFinder({
    input: '#search-input',
    showResult: '#search-result-wrapper',
    contentApiKey: '826c59f45889a30e99497114e7',
    resultTemplate: `
        <p>Search match(es): ##resultCount</p>
        <div class="d-flex flex-wrap result-wrap">
            ##results
        </div>
    `,
    singleResultTemplate: `
        <div class="result">
            <div class="index">
                <h2></h2>
            </div>
            <h3 class="title">
                <a href="##url">
                    ##title
                </a>
            </h3>
        </div>
    `,
})

//////////////////////////// 10. Load more posts JS ////////////////////////////////////
