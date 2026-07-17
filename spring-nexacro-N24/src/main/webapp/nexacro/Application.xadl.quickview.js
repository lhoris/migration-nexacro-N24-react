(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsAllMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption_en\" type=\"STRING\" size=\"256\"/><Column id=\"caption_ko\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"upid\" type=\"STRING\" size=\"256\"/><Column id=\"desktop\" type=\"STRING\" size=\"256\"/><Column id=\"mobile\" type=\"STRING\" size=\"256\"/><Column id=\"wre\" type=\"STRING\" size=\"256\"/><Column id=\"nre\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"grp\" type=\"STRING\" size=\"256\"/><Column id=\"odr\" type=\"INT\" size=\"256\"/><Column id=\"sys\" type=\"STRING\" size=\"256\"/><Column id=\"tooltiptext_ko\" type=\"STRING\" size=\"256\"/><Column id=\"tooltiptext_en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">10000</Col><Col id=\"caption_en\">Grid</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">그리드</Col><Col id=\"grp\">1</Col><Col id=\"odr\">1</Col><Col id=\"sys\">1</Col></Row><Row><Col id=\"id\">10100</Col><Col id=\"caption_en\">Sort, Filter, Find</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"url\">grid::function.xfdl</Col><Col id=\"caption_ko\">정렬, 필터, 찾기</Col><Col id=\"grp\">1</Col><Col id=\"odr\">2</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">그리드 데이터를 정렬/ 필터/ 찾기 합니다.</Col><Col id=\"tooltiptext_en\">Sort/filter/find grid data.</Col></Row><Row><Col id=\"id\">10300</Col><Col id=\"caption_en\">Pagination</Col><Col id=\"caption_ko\">페이징</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">grid::pagination.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">4</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">버튼 스타일과 무한 스크롤 타입으로 페이징이 가능 합니다.</Col><Col id=\"tooltiptext_en\">Paging is possible with button style and infinite scroll type.</Col></Row><Row><Col id=\"id\">10400</Col><Col id=\"caption_en\">Personalization</Col><Col id=\"caption_ko\">개인화</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">grid::personalization.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">5</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">사용자마다 원하는 포맷을 유지 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">Each user can maintain the desired format.</Col></Row><Row><Col id=\"id\">10200</Col><Col id=\"caption_en\">Renderer</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"url\">grid::renderer.xfdl</Col><Col id=\"caption_ko\">다양한 표현</Col><Col id=\"grp\">1</Col><Col id=\"odr\">3</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">그리드 데이터를 셀 표시 유형/ 트리 그룹핑/ 멀티포맷/ 표현식 등으로 표현 해 줍니다.</Col><Col id=\"tooltiptext_en\">It expresses grid data in cell display type/tree grouping/multi-format/expression, etc.</Col></Row><Row><Col id=\"id\">10500</Col><Col id=\"caption_en\">Pivot</Col><Col id=\"caption_ko\">피벗</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">grid::pivot.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">6</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">데이터를 원하는 행/열로 피봇팅하여 표현합니다.</Col><Col id=\"tooltiptext_en\">Represent data by pivoting it to the desired row/column.</Col></Row><Row><Col id=\"id\">10600</Col><Col id=\"caption_en\">Large Data</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">대용량 데이터</Col><Col id=\"url\">grid::largedata.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">7</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">많은 양의 데이터를 조회 가능 합니다.</Col><Col id=\"tooltiptext_en\">A large amount of data can be viewed.</Col></Row><Row><Col id=\"id\">10700</Col><Col id=\"caption_en\">Quantum Grid</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">퀀텀 그리드</Col><Col id=\"url\">grid::quantum.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">9</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">그리드 데이터를 동적으로 그룹핑 하여 트리 형태로 표현합니다.</Col><Col id=\"tooltiptext_en\">Grid data is dynamically grouped and expressed in tree form.</Col></Row><Row><Col id=\"id\">10800</Col><Col id=\"caption_en\">Freeze Panes</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">틀 고정</Col><Col id=\"url\">grid::freezepanes.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">10</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">그리드 스크롤시 원하는 셀을 고정 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can freeze any cell you want when the grid scrolls.</Col></Row><Row><Col id=\"id\">10900</Col><Col id=\"caption_en\">Smart Scroll</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">스마트 스크롤</Col><Col id=\"url\">grid::smartscroll.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">11</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">그리드 스크롤시 고속의 스크롤을 지원 합니다.</Col><Col id=\"tooltiptext_en\">Supports high-speed scrolling during grid scrolling.</Col></Row><Row><Col id=\"id\">11000</Col><Col id=\"caption_en\">Export &amp; Import</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">내려받기 &amp; 가져오기</Col><Col id=\"url\">grid::export.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">12</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">엑셀로 Export &amp; Import 가능 합니다.</Col><Col id=\"tooltiptext_en\">Export &amp; Import to Excel is possible.</Col></Row><Row><Col id=\"id\">11100</Col><Col id=\"caption_en\">Copy &amp; Paste</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">복사 &amp; 붙여넣기</Col><Col id=\"url\">grid::copypaste.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">13</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">그리드와 엑셀 간의 복사 &amp; 붙여넣을 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can copy &amp; paste between grid and excel.</Col></Row><Row><Col id=\"id\">11200</Col><Col id=\"caption_en\">Drag &amp; Drop</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">드래그 &amp; 드롭</Col><Col id=\"url\">grid::dragndrop.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">14</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">원하는 컬럼으로 그리드를 동적으로 생성, 데이터 이동이 가능 합니다.</Col><Col id=\"tooltiptext_en\">It is possible to dynamically create a grid with desired columns and move data.</Col></Row><Row><Col id=\"id\">11300</Col><Col id=\"caption_en\">Split lookup</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">분할 조회</Col><Col id=\"url\">grid::progressload.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">8</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">대용량 데이터 조회 시 row 단위로 분할 조회 합니다.</Col><Col id=\"tooltiptext_en\">When searching for large amounts of data, split search by row unit.</Col></Row><Row><Col id=\"id\">11400</Col><Col id=\"caption_en\">Dynamic Grid</Col><Col id=\"level\">1</Col><Col id=\"upid\">10000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">동적 그리드</Col><Col id=\"url\">grid::dynamic.xfdl</Col><Col id=\"grp\">1</Col><Col id=\"odr\">15</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">그리드를 원하는 형태로 커스터마이징 하여 사용 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can customize the grid to the desired shape and use it.</Col></Row><Row><Col id=\"id\">20000</Col><Col id=\"caption_en\">Components</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">컴포넌트</Col><Col id=\"url\"/><Col id=\"grp\">2</Col><Col id=\"odr\">1</Col><Col id=\"sys\">1</Col></Row><Row><Col id=\"id\">20100</Col><Col id=\"caption_en\">Basic Components</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">기본 컴포넌트</Col><Col id=\"url\">comp::components.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">2</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">다양한 기본 컴포넌트가 제공 됩니다.</Col><Col id=\"tooltiptext_en\">Various basic components are provided.</Col></Row><Row><Col id=\"id\">20200</Col><Col id=\"caption_en\">Mobile First Components</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">모바일 퍼스트 컴포넌트</Col><Col id=\"url\">comp::mobilecomponents.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">3</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">모바일 퍼스트 컴포넌트가 제공 됩니다.</Col><Col id=\"tooltiptext_en\">Mobile-first components are provided.</Col></Row><Row><Col id=\"id\">20300</Col><Col id=\"caption_en\">File Transfer</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"nre\">0</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">파일 전송</Col><Col id=\"url\">comp::filetransfer.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">4</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">파일을 서버에 업로드/ 다운로드 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can upload/download files to/from the server.</Col></Row><Row><Col id=\"id\">20500</Col><Col id=\"caption_en\">List View</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">리스트뷰</Col><Col id=\"url\">comp::listview.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">6</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">비 정형화된 형식으로 데이터 표현이 가능 합니다.</Col><Col id=\"tooltiptext_en\">Data can be expressed in an informal format.</Col></Row><Row><Col id=\"id\">20600</Col><Col id=\"caption_en\">Fit to Contents</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">Fit to Contents</Col><Col id=\"url\">comp::fittocontents.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">7</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">텍스트의 사이즈에 따라 컴포넌트의 크기 자동 조정이 가능 합니다.</Col><Col id=\"tooltiptext_en\">It is possible to automatically adjust the size of the component according to the size of the text.</Col></Row><Row><Col id=\"id\">20700</Col><Col id=\"caption_en\">Dynamic Generate</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">컴포넌트 동적 생성</Col><Col id=\"url\">comp::generate.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">8</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">컴포넌트의 동적 생성 시간을 확인 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can check the dynamic creation time of the component.</Col></Row><Row><Col id=\"id\">20800</Col><Col id=\"caption_en\">Google Map</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">구글 지도</Col><Col id=\"url\">comp::googlemap.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">9</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">구글맵 컴포넌트로 손쉽게 구글 지도 연동이 가능 합니다.</Col><Col id=\"tooltiptext_en\">Google Maps can be easily linked with Google Maps component.</Col></Row><Row><Col id=\"id\">20900</Col><Col id=\"caption_en\">Menu</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">다양한 메뉴 표현</Col><Col id=\"url\">comp::menu.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">10</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">다양한 메뉴로 화면을 유연하게 구성 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can flexibly configure the screen with various menus.</Col></Row><Row><Col id=\"id\">21000</Col><Col id=\"caption_en\">Two-way Data binding</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">양방향 바인딩</Col><Col id=\"url\">comp::binding.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">11</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">데이터셋과 바인드된 모든 컴포넌트의 데이터를 자동으로 실시간 동기화 합니다.</Col><Col id=\"tooltiptext_en\">Data of all components bound to the dataset are automatically synchronized in real time.</Col></Row><Row><Col id=\"id\">21100</Col><Col id=\"caption_en\">Graphics</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">그래픽스</Col><Col id=\"url\">comp::graphics.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">12</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">그래픽스 컴포넌트로 선이나 도형을 그릴 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can draw lines or shapes with the graphics component.</Col></Row><Row><Col id=\"id\">21200</Col><Col id=\"caption_en\">Animation</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">애니메이션</Col><Col id=\"url\">comp::animation.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">13</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">애니메이션 동적 효과를 적용합니다.</Col><Col id=\"tooltiptext_en\">Apply animation dynamic effects.</Col></Row><Row><Col id=\"id\">21300</Col><Col id=\"caption_en\">Arrangement</Col><Col id=\"level\">1</Col><Col id=\"upid\">20000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">Arrangement</Col><Col id=\"url\">comp::arrangement.xfdl</Col><Col id=\"grp\">2</Col><Col id=\"odr\">14</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">상대좌표로 컴포넌트의 위치 설정이 가능 합니다.</Col><Col id=\"tooltiptext_en\">It is possible to set the position of the component in relative coordinates.</Col></Row><Row><Col id=\"id\">30000</Col><Col id=\"caption_en\">Mobile API</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">모바일 기능</Col><Col id=\"url\"/><Col id=\"grp\">3</Col><Col id=\"odr\">1</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">30100</Col><Col id=\"caption_en\">Camera</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">Camera</Col><Col id=\"url\">device::camera.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">2</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">30200</Col><Col id=\"caption_en\">Contact</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">Contact</Col><Col id=\"url\">device::contact.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">3</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">30300</Col><Col id=\"caption_en\">ImagePicker</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">ImagePicker</Col><Col id=\"url\">device::imagepicker.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">4</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">30400</Col><Col id=\"caption_en\">Phone</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">Phone</Col><Col id=\"url\">device::phone.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">5</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">30500</Col><Col id=\"caption_en\">Sms</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">Sms</Col><Col id=\"url\">device::sms.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">6</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">30600</Col><Col id=\"caption_en\">Vibrate</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">Vibrate</Col><Col id=\"url\">device::vibrate.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">7</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">30700</Col><Col id=\"caption_en\">Sign</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">Sign</Col><Col id=\"url\">device::sign.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">8</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">30800</Col><Col id=\"caption_en\">AudioPlayer</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">AudioPlayer</Col><Col id=\"url\">device::audioplayer.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">9</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">30900</Col><Col id=\"caption_en\">VideoPlayer</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">VideoPlayer</Col><Col id=\"url\">device::videoplayer.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">10</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">31000</Col><Col id=\"caption_en\">VirtualFile</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">VirtualFile</Col><Col id=\"url\">device::virtualfile.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">11</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">31100</Col><Col id=\"caption_en\">WebView</Col><Col id=\"caption_ko\">WebView</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">0</Col><Col id=\"nre\">1</Col><Col id=\"url\">device::webview.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">12</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">31200</Col><Col id=\"caption_en\">Network</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">Network</Col><Col id=\"url\">device::network.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">13</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">31300</Col><Col id=\"caption_en\">Acceleration</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">Acceleration</Col><Col id=\"url\">device::acceleration.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">14</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">31400</Col><Col id=\"caption_en\">BluetoothLE</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">BluetoothLE</Col><Col id=\"url\">device::bluetoothle.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">15</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">31500</Col><Col id=\"caption_en\">GeoLocation</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">GeoLocation</Col><Col id=\"url\">device::geolocation.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">16</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">31600</Col><Col id=\"caption_en\">GoogleMap</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">GoogleMap</Col><Col id=\"url\">device::googlemap.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">17</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">31700</Col><Col id=\"caption_en\">System</Col><Col id=\"level\">1</Col><Col id=\"upid\">30000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">0</Col><Col id=\"caption_ko\">System</Col><Col id=\"url\">device::system.xfdl</Col><Col id=\"grp\">3</Col><Col id=\"odr\">18</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">40000</Col><Col id=\"caption_en\">Utility</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">유용한 기능</Col><Col id=\"url\"/><Col id=\"grp\">4</Col><Col id=\"odr\">1</Col><Col id=\"sys\">1</Col></Row><Row><Col id=\"id\">40100</Col><Col id=\"caption_en\">Pop-up</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"nre\">1</Col><Col id=\"wre\">1</Col><Col id=\"caption_ko\">다양한 팝업 표현</Col><Col id=\"url\">sample::popup.xfdl</Col><Col id=\"grp\">4</Col><Col id=\"odr\">2</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">다양한 형태로 팝업 표현이 가능 합니다.</Col><Col id=\"tooltiptext_en\">Pop-up expression is possible in various forms.</Col></Row><Row><Col id=\"id\">40300</Col><Col id=\"caption_en\">Web Widget</Col><Col id=\"caption_ko\">웹 위젯</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">sample::personalization.xfdl</Col><Col id=\"grp\">4</Col><Col id=\"odr\">4</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">사용자가 원하는 위젯을 구성하여 화면 운영이 가능 합니다.</Col><Col id=\"tooltiptext_en\">Screen operation is possible by configuring the widgets the user wants.</Col></Row><Row><Col id=\"id\">40400</Col><Col id=\"caption_en\">RESTFul</Col><Col id=\"caption_ko\">RESTFul</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">sample::restful.xfdl</Col><Col id=\"grp\">4</Col><Col id=\"odr\">5</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">REST API 활용 가능 합니다.</Col><Col id=\"tooltiptext_en\">REST API can be utilized.</Col></Row><Row><Col id=\"id\">40500</Col><Col id=\"caption_en\">Hot Key</Col><Col id=\"caption_ko\">단축키</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">sample::hotkey.xfdl</Col><Col id=\"grp\">4</Col><Col id=\"odr\">6</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">버튼마다 원하는 키 매핑을 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can set the key mapping you want for each button.</Col></Row><Row><Col id=\"id\">40600</Col><Col id=\"caption_en\">Drag &amp; Drop</Col><Col id=\"caption_ko\">드래그 &amp; 드롭</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">sample::portlet.xfdl</Col><Col id=\"grp\">4</Col><Col id=\"odr\">7</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">포틀릿 화면으로 원하는 화면 배치를 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can arrange the screen you want with the portlet screen.</Col></Row><Row><Col id=\"id\">40700</Col><Col id=\"caption_en\">Widget</Col><Col id=\"caption_ko\">위젯</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">sample::widget.xfdl</Col><Col id=\"grp\">4</Col><Col id=\"odr\">9</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">40800</Col><Col id=\"caption_en\">File</Col><Col id=\"caption_ko\">파일</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">1</Col><Col id=\"wre\">0</Col><Col id=\"nre\">1</Col><Col id=\"url\">sample::devicefile.xfdl</Col><Col id=\"grp\">4</Col><Col id=\"odr\">10</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">41000</Col><Col id=\"caption_en\">Reference</Col><Col id=\"caption_ko\">참조</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">sample::reference.xfdl</Col><Col id=\"grp\">4</Col><Col id=\"odr\">11</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">넥사크로로 개발된 다양한 사이트를 확인 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can check various sites developed with Nexacro.</Col></Row><Row><Col id=\"id\">41100</Col><Col id=\"caption_en\">DataObject</Col><Col id=\"caption_ko\">데이터오브젝트</Col><Col id=\"level\">1</Col><Col id=\"upid\">40000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">sample::dataobject.xfdl</Col><Col id=\"grp\">4</Col><Col id=\"odr\">12</Col><Col id=\"sys\">0</Col><Col id=\"tooltiptext_ko\"/><Col id=\"tooltiptext_en\"/></Row><Row><Col id=\"id\">50000</Col><Col id=\"caption_en\">Extension</Col><Col id=\"caption_ko\">연동/확장</Col><Col id=\"level\">0</Col><Col id=\"upid\">0</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"grp\">5</Col><Col id=\"odr\">1</Col><Col id=\"sys\">1</Col></Row><Row><Col id=\"id\">50200</Col><Col id=\"caption_en\">Report</Col><Col id=\"caption_ko\">레포트</Col><Col id=\"level\">1</Col><Col id=\"upid\">50000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">external::report.xfdl</Col><Col id=\"grp\">5</Col><Col id=\"odr\">3</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">유비디시젼의 유비리포트와 연동 화면 입니다.</Col><Col id=\"tooltiptext_en\">This is a screen linked with UbiReport of UbiDecision.</Col></Row><Row><Col id=\"id\">50300</Col><Col id=\"caption_en\">PDF Viewer</Col><Col id=\"caption_ko\">PDF 뷰어</Col><Col id=\"level\">1</Col><Col id=\"upid\">50000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">external::pdfviewer.xfdl</Col><Col id=\"grp\">5</Col><Col id=\"odr\">4</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">오픈소스 PDF.js 연동 화면 입니다.</Col><Col id=\"tooltiptext_en\">This is an open source PDF.js link screen.</Col></Row><Row><Col id=\"id\">50100</Col><Col id=\"caption_en\">Chart &amp; Grid</Col><Col id=\"caption_ko\">차트 &amp; 그리드</Col><Col id=\"level\">1</Col><Col id=\"upid\">50000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">external::chartngrid.xfdl</Col><Col id=\"grp\">5</Col><Col id=\"odr\">2</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">DxChart와 그리드 연동 화면 입니다.</Col><Col id=\"tooltiptext_en\">This is a DxChart and Grid linkage screen.</Col></Row><Row><Col id=\"id\">50500</Col><Col id=\"caption_en\">Extension Component</Col><Col id=\"caption_ko\">확장 컴포넌트</Col><Col id=\"level\">1</Col><Col id=\"upid\">50000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">1</Col><Col id=\"url\">external::extensioncomponent.xfdl</Col><Col id=\"grp\">5</Col><Col id=\"odr\">6</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">모듈로 개발한 다양한 컴포넌트가 보여지는 화면입니다.</Col><Col id=\"tooltiptext_en\">This is a screen shows the various components developed as modules.</Col></Row><Row><Col id=\"id\">50600</Col><Col id=\"caption_en\">Barcode/QRcode</Col><Col id=\"caption_ko\">Barcode/QRcode</Col><Col id=\"level\">1</Col><Col id=\"upid\">50000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">0</Col><Col id=\"nre\">1</Col><Col id=\"url\">external::barcode.xfdl</Col><Col id=\"grp\">5</Col><Col id=\"odr\">7</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">50700</Col><Col id=\"caption_en\">ExternalAPI</Col><Col id=\"caption_ko\">ExternalAPI</Col><Col id=\"level\">1</Col><Col id=\"upid\">50000</Col><Col id=\"desktop\">0</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">0</Col><Col id=\"nre\">1</Col><Col id=\"url\">external::externalapi.xfdl</Col><Col id=\"grp\">5</Col><Col id=\"odr\">8</Col><Col id=\"sys\">0</Col></Row><Row><Col id=\"id\">50800</Col><Col id=\"caption_en\">X-PUSH</Col><Col id=\"caption_ko\">X-PUSH</Col><Col id=\"level\">1</Col><Col id=\"upid\">50000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"wre\">1</Col><Col id=\"nre\">0</Col><Col id=\"url\">external::xpush.xfdl</Col><Col id=\"grp\">5</Col><Col id=\"odr\">9</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">X-PUSH 와 연동하여 실시간 메시지를 송/수신 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can send/receive real-time messages by connect with X-PUSH.</Col></Row><Row><Col id=\"id\">50900</Col><Col id=\"caption_en\">STT / TTS</Col><Col id=\"caption_ko\">STT / TTS</Col><Col id=\"level\">1</Col><Col id=\"upid\">50000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">1</Col><Col id=\"wre\">1</Col><Col id=\"nre\">0</Col><Col id=\"url\">external::sttntts.xfdl</Col><Col id=\"grp\">5</Col><Col id=\"odr\">10</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">STT와 TTS를 할 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can do STT and TTS.</Col></Row><Row><Col id=\"id\">51000</Col><Col id=\"caption_en\">Intersection Observer</Col><Col id=\"caption_ko\">Intersection Observer</Col><Col id=\"level\">1</Col><Col id=\"upid\">50000</Col><Col id=\"desktop\">1</Col><Col id=\"mobile\">0</Col><Col id=\"wre\">1</Col><Col id=\"nre\">0</Col><Col id=\"url\">external::intersectionobserver.xfdl</Col><Col id=\"grp\">5</Col><Col id=\"odr\">11</Col><Col id=\"sys\">1</Col><Col id=\"tooltiptext_ko\">Intersection Observer API를 사용하여 랜덤의 이미지를 무한으로 나타낼 수 있습니다.</Col><Col id=\"tooltiptext_en\">You can display an infinite number of random images using the Intersection Observer API.</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"upid\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"tooltiptext\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("langCode","en");
            this._addVariable("themeMode","L");
            this._addVariable("messages","");
            this._addVariable("webRootUrl","");
            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application");
            this.set_screenid("Mobile_screen,Desktop_screen");
            this.set_licenseurl("./NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","480","768",null,null,this);
            mainframe.set_showcascadetitletext("false");
            mainframe.set_titletext("Nexacro N Demo");
            mainframe.set_border("1px solid #eeeeee");
            mainframe.set_showtitlebar("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application.xadl", function() {
        // 실행환경
        this.IsMobile = false;
        this.IsNRE    = false;
        this.IsProd   = false;
        this.IsStage  = false;
        this.IsDev    = false;
        this.IsLocal  = false;

        // private data code
        this.themeMode 	   = "";
        this.langCode	   = "";

        // application keys
        this.proddomain    = "";	//운영서버 도메인
        this.stagedomain   = "";	//stage서버 도메인
        this.devdomain	   = "";	//dev서버 도메인
        this.googlemap     = "";	//GoogleMap Api Key
        this.koreafilm     = "";	//KoreaFilm Service Key
        this.webRootUrl    = "";	//web url

        /*
         *	Application 시작시
         */
        this.Application_onload = function(obj,e)
        {
        	this.fetchApplicationKey();
        };

        /*
         *	Application Info 요청
         */
        this.fetchApplicationKey = function()
        {
        	let xhr = new XMLHttpRequest();
        	let pThis = this;

        	xhr.open("GET", "./i18n/key.json");
            xhr.send();

            xhr.onreadystatechange = function() {

        		if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
        		{
        			//  서버 처리중,,,
        		}
        		else if (this.readyState == 4) {
        			try{
        				//서버로부터 응답이 도착
        				let jsonData = JSON.parse(this.responseText);

        				// application keys
        				pThis.proddomain 	= jsonData["domain.proddomain"];
        				pThis.stagedomain 	= jsonData["domain.stagedomain"];
        				pThis.devdomain 	= jsonData["domain.devdomain"];
        				pThis.googlemap 	= jsonData["key.googlemap"    ];
        				pThis.koreafilm 	= jsonData["key.koreafilm"	  ];
        			} catch(e) {
        				trace("Application key data empty.");
        			} finally {
        				pThis.setApplicationInfo();
        				pThis.setPrivateDataInfo();
        			}

        		}
        	};
        };

        /*
         *	Application 정보
         */
        this.setApplicationInfo = function(){
        	let osNm = system.osversion;
        	let nvNm = system.navigatorname;
        	let orientNm = system.mobileorientation;
        	let env  = nexacro.getEnvironment();
        	let projectUrl = nexacro.getProjectPath();
        	projectUrl = projectUrl.substring(0, projectUrl.lastIndexOf("/"));
        	projectUrl = projectUrl.substring(0, projectUrl.lastIndexOf("/")+1);
        	this.webRootUrl = projectUrl;

        	/*	 모바일여부	 */
        	//100/101버전에서 android - osversion/navigatorname 잘못가져오는 문제로 mobileorientation으로 모바일 여부 판단.(임시) //20231220 milpaso
        	if(osNm) {
        		osNm = osNm.toUpperCase();
        		if		(osNm.indexOf("WIN") > -1)																	{	this.IsMobile = false;	}
        		else if (osNm.indexOf("AND") > -1 || osNm.indexOf("IOS") > -1 || (orientNm >= 0 && orientNm <= 4)) 	{	this.IsMobile = true;	}
        		else 																								{	this.IsMobile = false;	}
        	}

        	/*	 전용브라우저여부	 */
        	this.IsNRE = nvNm.indexOf("nexacro") > -1 ? true : false;

        	/*	 운영,개발,로컬 여부	 */
        	if 		(this.webRootUrl.indexOf(this.proddomain)  > -1) {	 this.IsProd  = true;	}
        	else if (this.webRootUrl.indexOf(this.stagedomain) > -1) {	 this.IsStage = true;	}
        	else if (this.webRootUrl.indexOf(this.devdomain)   > -1) {	 this.IsDev   = true;	}
        	else													 {	 this.IsLocal = true;	}

        	/*	 서비스별 url	 */
        	if (this.IsProd || this.IsStage || this.IsDev) {
        		env.services["svc"  ].url = `${this.webRootUrl}svc/`;
        		env.services["xeni" ].url = `${this.webRootUrl}xeni/`;
        		env.services["ubi"  ].url = `${this.webRootUrl}ubi-server/`;
        		env.services["xpush"].url = `https://${this.proddomain}:50000, tcps://${this.proddomain}:50001`;
        	}
        	else if (this.IsLocal) {
        		env.services["svc"  ].url = `${this.webRootUrl}`;
        		env.services["xeni" ].url = `${this.webRootUrl}`;
        		env.services["ubi"  ].url = `${this.webRootUrl}ubi-server/`;
        		env.services["xpush"].url = `https://${this.proddomain}:50000, tcps://${this.proddomain}:50001`;
        	}

        	/*	 해상도 설정	 */
        	if(!this.IsMobile && this.IsNRE) {
        		this.mainframe.width = 1293+30;
        		this.mainframe.height = 940+60;
        	}

        	/*	 모바일 디버깅 설정	WRE  */
        	if(!this.IsNRE && !this.IsProd && this.IsMobile) {
        		if(typeof MyHistory.getContext().fnInitMobileDebug == 'function') {
        			MyHistory.getContext().fnInitMobileDebug(window);
        		}
        	} else {
        		this.traceApplicationInfo();
        	}

        };

        /*
         * 어플리케이션 정보 출력
         */
        this.traceApplicationInfo = function()
        {
        	let env  = nexacro.getEnvironment();

        	/***  trace url (production 환경 제외) ***/
        	if(!this.IsProd) {
        		console.log(`IsMobile >>> ${this.IsMobile}`)
        		console.log(`IsNRE    >>> ${this.IsNRE}`   )
        		console.log(`IsProd   >>> ${this.IsProd}`  )
        		console.log(`IsStage  >>> ${this.IsStage}` )
        		console.log(`IsDev    >>> ${this.IsDev}`   )
        		console.log(`IsLocal  >>> ${this.IsLocal}` )
        		console.log(`webRootUrl >>> ${this.webRootUrl}`);
        		console.log(`services["svc"  ] >>> ${env.services["svc"  ].url}`);
        		console.log(`services["xeni" ] >>> ${env.services["xeni" ].url}`);
        		console.log(`services["ubi"  ] >>> ${env.services["ubi"  ].url}`);
        		console.log(`services["xpush"] >>> ${env.services["xpush"].url}`);
        	}
        };

        /*
        *	로컬 스토리지 (다국어, 테마)
        */
        this.setPrivateDataInfo = function(){
        	let privateData = nexacro.getPrivateProfile("privateData");

        	if (nexacro.isEmpty(privateData)) {
        		this.langCode = system.locale.indexOf("ko")>-1?"ko":"en";
        	} else {
        		let data = JSON.parse(privateData);
        		this.langCode  = data.langCode;

        		try {
        			if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        				this.themeMode = "D";
        			} else {
        				this.themeMode = "L";
        			}
        		} catch (err) {
        			if(nexacro.isEmpty(data.themeMode)){
        				this.themeMode = "L";
        			}else {
        				this.themeMode = data.themeMode;
        			}
        		}

        		nexacro.loadStyle("xcssrc::demo_"+this.themeMode+".xcss");
        	}
        	this.changeLanguage(this.langCode);
        };

        /*
         *	다국어처리
         */
        this.changeLanguage = function(langCode)
        {
        	this.langCode = langCode;
            nexacro.getEnvironment().locale = langCode=="ko"?"ko_KR":"en_US";

        	/* TO-BE 다국어 처리 - Start   */
        	nexacro.loadStringResource(langCode); //TO-BE : 지정한 언어에 해당하는 StringResource를 로드하는 메서드
        	let pThis = this;

        	pThis.setAllMenu();

        	let root = pThis.mainframe.childframe;
        	root.formurl = "";
        	root.formurl = "frame::root.xfdl";

        	pThis.langCode = langCode;

        	if (system.navigatorname.indexOf("nexacro") == -1) {
        		gtag('event', 'select_content', {
        			content_type: "changeLanguage",
        			items: [
        				{
        					id: langCode,
        					name: langCode=="ko"?"Korean":"English"
        				}
        			]
        		});
        	};
        /* TO-BE 다국어 처리 - End   */

        /* AS-IS 다국어 처리 - Start */
        // 	let xhr = new XMLHttpRequest(),
        // 		pThis = this;
        //
        // 	xhr.open("GET", "./i18n/"+langCode+".json");
        //     xhr.send();
        //
        //     xhr.onreadystatechange = function() {
        // 		if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
        // 		{
        // 			//  서버 처리중,,,
        // 		}
        // 		else if (this.readyState == 4) {
        // 			//서버로부터 응답이 도착
        // 			pThis.messages = JSON.parse(this.responseText);
        //
        // 			pThis.setAllMenu();
        //
        // 			let root = pThis.mainframe.childframe;
        // 			root.set_formurl("");
        // 			root.set_formurl("frame::root.xfdl");
        //
        // 			pThis.langCode = langCode;
        //
        // 			if (system.navigatorname.indexOf("nexacro") == -1) {
        // 				gtag('event', 'select_content', {
        // 					content_type: "changeLanguage",
        // 					items: [
        // 						{
        // 							id: langCode,
        // 							name: langCode=="ko"?"Korean":"English"
        // 						}
        // 					]
        // 				});
        // 			}
        // 		}
        // 	};
        /* AS-IS 다국어 처리 - End   */
        };

        /*
         *	메뉴설정
         */
        this.setAllMenu = function(menuid){
        	this.gdsAllMenu.filter("");
        	this.gdsAllMenu.updateSortGroup("S:+grp+odr");

        	let filterExpr = "";

        	filterExpr += this.IsMobile ? "mobile=='1'" : "desktop=='1'";
        	filterExpr += this.IsNRE    ? "&&nre=='1'" : "&&wre=='1'";

        	filterExpr += this.IsMobile ? "&&id.substr(0,1)!='4'" : "";
        	filterExpr += this.IsProd   ? "&&sys=='1'" : "";

        	this.gdsAllMenu.filter(filterExpr);

        	this.gdsMenu.clearData();

        	for (let i=0,len=this.gdsAllMenu.rowcount; i<len; i++) {
        		let r = this.gdsMenu.addRow();
        		this.gdsMenu.copyRow(r, this.gdsAllMenu, i, "id=id,caption=caption_"+this.langCode+",level=level,upid=upid,url=url,tooltiptext=tooltiptext_"+this.langCode);
        	}

        	this.gdsMenu.applyChange();
        }

        /*
         *	쿼리스트링
         */
        this.getParameter = function(name) {
        	let rtnval = '';
        	let nowAddress = unescape(MyHistory.getContext().location.href);
        	let parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1, nowAddress.length)).split('&');
        	for (let i = 0; i < parameters.length; i++) {
        		let varName = parameters[i].split('=')[0];
        		if (varName.toUpperCase() == name.toUpperCase()) {
        			rtnval = parameters[i].split('=')[1];
        			break;
        		}
        	}
        	return rtnval;
        }

        /*
         *	Application 종료시
         */
        this.Application_onbeforeexit = function(obj,e)
        {
        	let data = {
        		"langCode": this.langCode,
        		"themeMode": this.themeMode
        	};

        	nexacro.setPrivateProfile("privateData", JSON.stringify(data));
        };
        });
		this.checkLicense("./NexacroN_client_license.xml");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::basic.xcss");
        this.loadCss("xcssrc::demo_L.xcss");
        this.loadCss("xcssrc::NxPivot.xcss");
        this.loadCss("xcssrc::compositeModule.xcss");
        this.loadCss("xcssrc::Sample_Module_product.xcss");
        this.loadCss("xcssrc::demo_D.xcss");
        this.loadIncludeScript("Application.xadl");
    };
}
)();
