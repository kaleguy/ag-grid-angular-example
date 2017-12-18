import { browser, by, element, protractor} from "protractor";
import 'jasmine';

describe('ag-grid-angular-examples E2E Tests', function () {

    let expectedTabTitles = [
        'Dynamic Angular Component Example',
        'Dynamic Angular Components - Richer Example'
    ];

    beforeEach(function () {
        browser.get('');
    });

    it(`should have ${expectedTabTitles.length} Tab Titles`, function () {
        element.all(by.css('li[role=presentation] a')).count().then(function (val) {
            console.log('title length', (val === expectedTabTitles.length));
            expect(val === expectedTabTitles.length).toBeTruthy()
        });
    });

    it(`should display all expected ${expectedTabTitles.length} Tab Titles`, function () {
        element.all(by.css('li[role=presentation] a')).map((anchor) => {
            return anchor.getText()
        }).then((linkTexts) => {
            linkTexts.forEach((linkText) => {
                let index = expectedTabTitles.indexOf(<string>linkText);
                if (index === -1) {
                    fail(`${linkText} not in the list of expected titles`);
                }
            })
        })
    });

    it('Dynamic Components Example should have first two rows expected results', function () {
        element(by.linkText('Dynamic Angular Component Example'))
            .click()
            // first row
            .then(() => {
                element(by.css('div[row-id="0"] div[col-id="row')).getText().then((text) => {
                    expect(text).toEqual("Row 0");
                });
            })
            .then(() => {
                element(by.css('div[row-id="0"] div[col-id="square')).getText().then((text) => {
                    expect(text).toEqual("0");
                });
            })
            .then(() => {
                element(by.css('div[row-id="0"] div[col-id="cube')).getText().then((text) => {
                    expect(text).toEqual("0");
                });
            })
            .then(() => {
                element(by.css('div[row-id="0"] div[col-id="params')).getText().then((text) => {
                    expect(text).toEqual("Field: row, Value: Row 0");
                });
            })
            // 2nd row
            .then(() => {
                element(by.css('div[row-id="1"] div[col-id="row')).getText().then((text) => {
                    expect(text).toEqual("Row 1");
                });
            })
            .then(() => {
                element(by.css('div[row-id="1"] div[col-id="square')).getText().then((text) => {
                    expect(text).toEqual("1");
                });
            })
            .then(() => {
                element(by.css('div[row-id="1"] div[col-id="cube')).getText().then((text) => {
                    expect(text).toEqual("1");
                });
            })
            .then(() => {
                element(by.css('div[row-id="1"] div[col-id="params')).getText().then((text) => {
                    expect(text).toEqual("Field: row, Value: Row 1");
                });
            })
            // 3rd row
            .then(() => {
                element(by.css('div[row-id="2"] div[col-id="row')).getText().then((text) => {
                    expect(text).toEqual("Row 2");
                });
            })
            .then(() => {
                element(by.css('div[row-id="2"] div[col-id="square')).getText().then((text) => {
                    expect(text).toEqual("4");
                });
            })
            .then(() => {
                element(by.css('div[row-id="2"] div[col-id="cube')).getText().then((text) => {
                    expect(text).toEqual("8");
                });
            })
            .then(() => {
                element(by.css('div[row-id="2"] div[col-id="params')).getText().then((text) => {
                    expect(text).toEqual("Field: row, Value: Row 2");
                });
            });
    });
})

