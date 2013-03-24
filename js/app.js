require.config({
    baseUrl : '/js',
    paths : {
        'jquery' : 'lib/jquery-1.9.0.min'
    }
});

require(['jquery', 'app/area'], function($, areaCode) {
    var $search = $('#form-search');
    var $searchBtn = $('#btn-search');
    var $searchInput = $('#input-search');

    var searchArea = function() {
        var value = $searchInput.val();
        var area = areaCode[value];
        if(area) {
            var url = 'http://www.weather.com.cn/data/sk/' + area + '.html';
            $.getJSON(url, function(data) {
                if(data) {
                    alert(data);
                }
            });
        }
        return false;
    };

    $search.submit(searchArea);
    $searchBtn.click(function() {
        $search.submit();
    });
});