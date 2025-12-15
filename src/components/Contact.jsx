import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        countryCode: '+91',
        location: '',
        requirement: ''
    });

    const [errors, setErrors] = useState({});

    const getCurrentLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                        const data = await response.json();
                        const address = data.display_name || `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`;
                        setFormData({
                            ...formData,
                            location: address
                        });
                        setErrors({ ...errors, location: '' });
                    } catch (error) {
                        console.error('Error fetching address:', error);
                        setFormData({
                            ...formData,
                            location: `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`
                        });
                        setErrors({ ...errors, location: 'Unable to fetch address. Using coordinates.' });
                    }
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setErrors({ ...errors, location: 'Unable to get current location. Please enter manually.' });
                }
            );
        } else {
            setErrors({ ...errors, location: 'Geolocation is not supported by this browser.' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
            tempErrors.name = "Name should contain only letters and spaces";
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            tempErrors.phone = "Enter a valid 10-digit phone number";
        }
        if (!formData.location.trim()) {
            tempErrors.location = "Location is required";
        }
        if (!formData.requirement.trim()) {
            tempErrors.requirement = "Requirement is required";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
        // Clear error for the field being changed
        setErrors({
            ...errors,
            [id]: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', phone: '', countryCode: '+91', location: '', requirement: '' });
        setErrors({});
    };

    return (
        <>
            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="container cta-container">
                    <h2>Ready to Transform Your Home?</h2>
                    <p>Get a free, no-obligation quote today and discover how much you could save.</p>
                    <div className="cta-btns">
                        <a href="#contact" className="btn btn-white">Request Free Quote</a>
                        <a href="tel:+911234567890" className="btn btn-outline-white">Call Us Now</a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container contact-container">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>Have questions? We're here to help. Contact us for expert advice.</p>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Phone</h4>
                                <p>+91 95151 04922 / +91 94833 33456</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Email</h4>
                                <p>info@srisampatti.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Factory Address</h4>
                                <p>Sy No. 382 (P) Pleasant Hills, Himayatsagar Road (Near to Outer Ring Road, Exit No. 17), Rajendranagar, Hyderabad 500030, Telangana</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <div className="contact-text">
                                <h4>Business Hours</h4>
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Full Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="name">Full Name</label>
                                </div>
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <div className="form-floating phone-floating">
                                    <div className="phone-input-group">
                                        <select
                                            id="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                        >
                                            <option value="+93">🇦🇫 Afghanistan +93</option>
                                            <option value="+355">🇦🇱 Albania +355</option>
                                            <option value="+213">🇩🇿 Algeria +213</option>
                                            <option value="+1-684">🇦🇸 American Samoa +1-684</option>
                                            <option value="+376">🇦🇩 Andorra +376</option>
                                            <option value="+244">🇦🇴 Angola +244</option>
                                            <option value="+1-264">🇦🇮 Anguilla +1-264</option>
                                            <option value="+672">🇦🇶 Antarctica +672</option>
                                            <option value="+1-268">🇦🇬 Antigua and Barbuda +1-268</option>
                                            <option value="+54">🇦🇷 Argentina +54</option>
                                            <option value="+374">🇦🇲 Armenia +374</option>
                                            <option value="+297">🇦🇼 Aruba +297</option>
                                            <option value="+61">🇦🇺 Australia +61</option>
                                            <option value="+43">🇦🇹 Austria +43</option>
                                            <option value="+994">🇦🇿 Azerbaijan +994</option>
                                            <option value="+1-242">🇧🇸 Bahamas +1-242</option>
                                            <option value="+973">🇧🇭 Bahrain +973</option>
                                            <option value="+880">🇧🇩 Bangladesh +880</option>
                                            <option value="+1-246">🇧🇧 Barbados +1-246</option>
                                            <option value="+375">🇧🇾 Belarus +375</option>
                                            <option value="+32">🇧🇪 Belgium +32</option>
                                            <option value="+501">🇧🇿 Belize +501</option>
                                            <option value="+229">🇧🇯 Benin +229</option>
                                            <option value="+1-441">🇧🇲 Bermuda +1-441</option>
                                            <option value="+975">🇧🇹 Bhutan +975</option>
                                            <option value="+591">🇧🇴 Bolivia +591</option>
                                            <option value="+387">🇧🇦 Bosnia and Herzegovina +387</option>
                                            <option value="+267">🇧🇼 Botswana +267</option>
                                            <option value="+55">🇧🇷 Brazil +55</option>
                                            <option value="+246">🇮🇴 British Indian Ocean Territory +246</option>
                                            <option value="+1-284">🇻🇬 British Virgin Islands +1-284</option>
                                            <option value="+673">🇧🇳 Brunei +673</option>
                                            <option value="+359">🇧🇬 Bulgaria +359</option>
                                            <option value="+226">🇧🇫 Burkina Faso +226</option>
                                            <option value="+257">🇧🇮 Burundi +257</option>
                                            <option value="+855">🇰🇭 Cambodia +855</option>
                                            <option value="+237">🇨🇲 Cameroon +237</option>
                                            <option value="+1">🇨🇦 Canada +1</option>
                                            <option value="+238">🇨🇻 Cape Verde +238</option>
                                            <option value="+1-345">🇰🇾 Cayman Islands +1-345</option>
                                            <option value="+236">🇨🇫 Central African Republic +236</option>
                                            <option value="+235">🇹🇩 Chad +235</option>
                                            <option value="+56">🇨🇱 Chile +56</option>
                                            <option value="+86">🇨🇳 China +86</option>
                                            <option value="+61">🇨🇽 Christmas Island +61</option>
                                            <option value="+61">🇨🇨 Cocos Islands +61</option>
                                            <option value="+57">🇨🇴 Colombia +57</option>
                                            <option value="+269">🇰🇲 Comoros +269</option>
                                            <option value="+682">🇨🇰 Cook Islands +682</option>
                                            <option value="+506">🇨🇷 Costa Rica +506</option>
                                            <option value="+385">🇭🇷 Croatia +385</option>
                                            <option value="+53">🇨🇺 Cuba +53</option>
                                            <option value="+599">🇨🇼 Curaçao +599</option>
                                            <option value="+357">🇨🇾 Cyprus +357</option>
                                            <option value="+420">🇨🇿 Czech Republic +420</option>
                                            <option value="+243">🇨🇩 Democratic Republic of the Congo +243</option>
                                            <option value="+45">🇩🇰 Denmark +45</option>
                                            <option value="+253">🇩🇯 Djibouti +253</option>
                                            <option value="+1-767">🇩🇲 Dominica +1-767</option>
                                            <option value="+1-809">🇩🇴 Dominican Republic +1-809</option>
                                            <option value="+670">🇹🇱 East Timor +670</option>
                                            <option value="+593">🇪🇨 Ecuador +593</option>
                                            <option value="+20">🇪🇬 Egypt +20</option>
                                            <option value="+503">🇸🇻 El Salvador +503</option>
                                            <option value="+240">🇬🇶 Equatorial Guinea +240</option>
                                            <option value="+291">🇪🇷 Eritrea +291</option>
                                            <option value="+372">🇪🇪 Estonia +372</option>
                                            <option value="+268">🇸🇿 Eswatini +268</option>
                                            <option value="+251">🇪🇹 Ethiopia +251</option>
                                            <option value="+500">🇫🇰 Falkland Islands +500</option>
                                            <option value="+298">🇫🇴 Faroe Islands +298</option>
                                            <option value="+679">🇫🇯 Fiji +679</option>
                                            <option value="+358">🇫🇮 Finland +358</option>
                                            <option value="+33">🇫🇷 France +33</option>
                                            <option value="+689">🇵🇫 French Polynesia +689</option>
                                            <option value="+241">🇬🇦 Gabon +241</option>
                                            <option value="+220">🇬🇲 Gambia +220</option>
                                            <option value="+995">🇬🇪 Georgia +995</option>
                                            <option value="+49">🇩🇪 Germany +49</option>
                                            <option value="+233">🇬🇭 Ghana +233</option>
                                            <option value="+350">🇬🇮 Gibraltar +350</option>
                                            <option value="+30">🇬🇷 Greece +30</option>
                                            <option value="+299">🇬🇱 Greenland +299</option>
                                            <option value="+1-473">🇬🇩 Grenada +1-473</option>
                                            <option value="+1-671">🇬🇺 Guam +1-671</option>
                                            <option value="+502">🇬🇹 Guatemala +502</option>
                                            <option value="+44-1481">🇬🇬 Guernsey +44-1481</option>
                                            <option value="+224">🇬🇳 Guinea +224</option>
                                            <option value="+245">🇬🇼 Guinea-Bissau +245</option>
                                            <option value="+592">🇬🇾 Guyana +592</option>
                                            <option value="+509">🇭🇹 Haiti +509</option>
                                            <option value="+504">🇭🇳 Honduras +504</option>
                                            <option value="+852">🇭🇰 Hong Kong +852</option>
                                            <option value="+36">🇭🇺 Hungary +36</option>
                                            <option value="+354">🇮🇸 Iceland +354</option>
                                            <option value="+91">🇮🇳 India +91</option>
                                            <option value="+62">🇮🇩 Indonesia +62</option>
                                            <option value="+98">🇮🇷 Iran +98</option>
                                            <option value="+964">🇮🇶 Iraq +964</option>
                                            <option value="+353">🇮🇪 Ireland +353</option>
                                            <option value="+44-1624">🇮🇲 Isle of Man +44-1624</option>
                                            <option value="+972">🇮🇱 Israel +972</option>
                                            <option value="+39">🇮🇹 Italy +39</option>
                                            <option value="+225">🇨🇮 Ivory Coast +225</option>
                                            <option value="+1-876">🇯🇲 Jamaica +1-876</option>
                                            <option value="+81">🇯🇵 Japan +81</option>
                                            <option value="+44-1534">🇯🇪 Jersey +44-1534</option>
                                            <option value="+962">🇯🇴 Jordan +962</option>
                                            <option value="+7">🇰🇿 Kazakhstan +7</option>
                                            <option value="+254">🇰🇪 Kenya +254</option>
                                            <option value="+686">🇰🇮 Kiribati +686</option>
                                            <option value="+383">🇽🇰 Kosovo +383</option>
                                            <option value="+965">🇰🇼 Kuwait +965</option>
                                            <option value="+996">🇰🇬 Kyrgyzstan +996</option>
                                            <option value="+856">🇱🇦 Laos +856</option>
                                            <option value="+371">🇱🇻 Latvia +371</option>
                                            <option value="+961">🇱🇧 Lebanon +961</option>
                                            <option value="+266">🇱🇸 Lesotho +266</option>
                                            <option value="+231">🇱🇷 Liberia +231</option>
                                            <option value="+218">🇱🇾 Libya +218</option>
                                            <option value="+423">🇱🇮 Liechtenstein +423</option>
                                            <option value="+370">🇱🇹 Lithuania +370</option>
                                            <option value="+352">🇱🇺 Luxembourg +352</option>
                                            <option value="+853">🇲🇴 Macau +853</option>
                                            <option value="+389">🇲🇰 Macedonia +389</option>
                                            <option value="+261">🇲🇬 Madagascar +261</option>
                                            <option value="+265">🇲🇼 Malawi +265</option>
                                            <option value="+60">🇲🇾 Malaysia +60</option>
                                            <option value="+960">🇲🇻 Maldives +960</option>
                                            <option value="+223">🇲🇱 Mali +223</option>
                                            <option value="+356">🇲🇹 Malta +356</option>
                                            <option value="+692">🇲🇭 Marshall Islands +692</option>
                                            <option value="+222">🇲🇷 Mauritania +222</option>
                                            <option value="+230">🇲🇺 Mauritius +230</option>
                                            <option value="+262">🇾🇹 Mayotte +262</option>
                                            <option value="+52">🇲🇽 Mexico +52</option>
                                            <option value="+691">🇫🇲 Micronesia +691</option>
                                            <option value="+373">🇲🇩 Moldova +373</option>
                                            <option value="+377">🇲🇨 Monaco +377</option>
                                            <option value="+976">🇲🇳 Mongolia +976</option>
                                            <option value="+382">🇲🇪 Montenegro +382</option>
                                            <option value="+1-664">🇲🇸 Montserrat +1-664</option>
                                            <option value="+212">🇲🇦 Morocco +212</option>
                                            <option value="+258">🇲🇿 Mozambique +258</option>
                                            <option value="+95">🇲🇲 Myanmar +95</option>
                                            <option value="+264">🇳🇦 Namibia +264</option>
                                            <option value="+674">🇳🇷 Nauru +674</option>
                                            <option value="+977">🇳🇵 Nepal +977</option>
                                            <option value="+31">🇳🇱 Netherlands +31</option>
                                            <option value="+687">🇳🇨 New Caledonia +687</option>
                                            <option value="+64">🇳🇿 New Zealand +64</option>
                                            <option value="+505">🇳🇮 Nicaragua +505</option>
                                            <option value="+227">🇳🇪 Niger +227</option>
                                            <option value="+234">🇳🇬 Nigeria +234</option>
                                            <option value="+683">🇳🇺 Niue +683</option>
                                            <option value="+672">🇳🇫 Norfolk Island +672</option>
                                            <option value="+850">🇰🇵 North Korea +850</option>
                                            <option value="+1-670">🇲🇵 Northern Mariana Islands +1-670</option>
                                            <option value="+47">🇳🇴 Norway +47</option>
                                            <option value="+968">🇴🇲 Oman +968</option>
                                            <option value="+92">🇵🇰 Pakistan +92</option>
                                            <option value="+680">🇵🇼 Palau +680</option>
                                            <option value="+970">🇵🇸 Palestine +970</option>
                                            <option value="+507">🇵🇦 Panama +507</option>
                                            <option value="+675">🇵🇬 Papua New Guinea +675</option>
                                            <option value="+595">🇵🇾 Paraguay +595</option>
                                            <option value="+51">🇵🇪 Peru +51</option>
                                            <option value="+63">🇵🇭 Philippines +63</option>
                                            <option value="+48">🇵🇱 Poland +48</option>
                                            <option value="+351">🇵🇹 Portugal +351</option>
                                            <option value="+1-787">🇵🇷 Puerto Rico +1-787</option>
                                            <option value="+974">🇶🇦 Qatar +974</option>
                                            <option value="+242">🇨🇬 Republic of the Congo +242</option>
                                            <option value="+262">🇷🇪 Réunion +262</option>
                                            <option value="+40">🇷🇴 Romania +40</option>
                                            <option value="+7">🇷🇺 Russia +7</option>
                                            <option value="+250">🇷🇼 Rwanda +250</option>
                                            <option value="+590">🇧🇱 Saint Barthélemy +590</option>
                                            <option value="+290">🇸🇭 Saint Helena +290</option>
                                            <option value="+1-869">🇰🇳 Saint Kitts and Nevis +1-869</option>
                                            <option value="+1-758">🇱🇨 Saint Lucia +1-758</option>
                                            <option value="+590">🇲🇫 Saint Martin +590</option>
                                            <option value="+508">🇵🇲 Saint Pierre and Miquelon +508</option>
                                            <option value="+1-784">🇻🇨 Saint Vincent and the Grenadines +1-784</option>
                                            <option value="+685">🇼🇸 Samoa +685</option>
                                            <option value="+378">🇸🇲 San Marino +378</option>
                                            <option value="+239">🇸🇹 São Tomé and Príncipe +239</option>
                                            <option value="+966">🇸🇦 Saudi Arabia +966</option>
                                            <option value="+221">🇸🇳 Senegal +221</option>
                                            <option value="+381">🇷🇸 Serbia +381</option>
                                            <option value="+248">🇸🇨 Seychelles +248</option>
                                            <option value="+232">🇸🇱 Sierra Leone +232</option>
                                            <option value="+65">🇸🇬 Singapore +65</option>
                                            <option value="+421">🇸🇰 Slovakia +421</option>
                                            <option value="+386">🇸🇮 Slovenia +386</option>
                                            <option value="+677">🇸🇧 Solomon Islands +677</option>
                                            <option value="+252">🇸🇴 Somalia +252</option>
                                            <option value="+27">🇿🇦 South Africa +27</option>
                                            <option value="+82">🇰🇷 South Korea +82</option>
                                            <option value="+211">🇸🇸 South Sudan +211</option>
                                            <option value="+34">🇪🇸 Spain +34</option>
                                            <option value="+94">🇱🇰 Sri Lanka +94</option>
                                            <option value="+249">🇸🇩 Sudan +249</option>
                                            <option value="+597">🇸🇷 Suriname +597</option>
                                            <option value="+46">🇸🇪 Sweden +46</option>
                                            <option value="+41">🇨🇭 Switzerland +41</option>
                                            <option value="+963">🇸🇾 Syria +963</option>
                                            <option value="+886">🇹🇼 Taiwan +886</option>
                                            <option value="+992">🇹🇯 Tajikistan +992</option>
                                            <option value="+255">🇹🇿 Tanzania +255</option>
                                            <option value="+66">🇹🇭 Thailand +66</option>
                                            <option value="+228">🇹🇬 Togo +228</option>
                                            <option value="+690">🇹🇰 Tokelau +690</option>
                                            <option value="+676">🇹🇴 Tonga +676</option>
                                            <option value="+1-868">🇹🇹 Trinidad and Tobago +1-868</option>
                                            <option value="+216">🇹🇳 Tunisia +216</option>
                                            <option value="+90">🇹🇷 Turkey +90</option>
                                            <option value="+993">🇹🇲 Turkmenistan +993</option>
                                            <option value="+1-649">🇹🇨 Turks and Caicos Islands +1-649</option>
                                            <option value="+688">🇹🇻 Tuvalu +688</option>
                                            <option value="+256">🇺🇬 Uganda +256</option>
                                            <option value="+380">🇺🇦 Ukraine +380</option>
                                            <option value="+971">🇦🇪 United Arab Emirates +971</option>
                                            <option value="+44">🇬🇧 United Kingdom +44</option>
                                            <option value="+1">🇺🇸 United States +1</option>
                                            <option value="+598">🇺🇾 Uruguay +598</option>
                                            <option value="+998">🇺🇿 Uzbekistan +998</option>
                                            <option value="+678">🇻🇺 Vanuatu +678</option>
                                            <option value="+39">🇻🇦 Vatican City +39</option>
                                            <option value="+58">🇻🇪 Venezuela +58</option>
                                            <option value="+84">🇻🇳 Vietnam +84</option>
                                            <option value="+1-284">🇻🇬 Virgin Islands (British) +1-284</option>
                                            <option value="+1-340">🇻🇮 Virgin Islands (U.S.) +1-340</option>
                                            <option value="+681">🇼🇫 Wallis and Futuna +681</option>
                                            <option value="+967">🇾🇪 Yemen +967</option>
                                            <option value="+260">🇿🇲 Zambia +260</option>
                                            <option value="+263">🇿🇼 Zimbabwe +263</option>
                                        </select>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="9876543210"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="phone">Phone Number</label>
                                    </div>
                                </div>
                                {errors.phone && <span className="error">{errors.phone}</span>}
                            </div>
                            <div className="form-group">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="location"
                                        placeholder="Location"
                                        required
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="location">Location</label>
                                </div>
                                {/* <button type="button" className="btn btn-outline" onClick={getCurrentLocation} style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Use Current Location</button> */}
                                {errors.location && <span className="error">{errors.location}</span>}
                            </div>
                            <div className="form-group">
                                <div className="form-floating">
                                    <textarea
                                        id="requirement"
                                        rows="4"
                                        placeholder="Tell us about your requirements..."
                                        required
                                        value={formData.requirement}
                                        onChange={handleChange}
                                    ></textarea>
                                    <label htmlFor="requirement">Tell us about your requirements...</label>
                                </div>
                                {errors.requirement && <span className="error">{errors.requirement}</span>}
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
