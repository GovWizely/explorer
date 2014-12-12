import DS from 'ember-data';

export default DS.Model.extend({
  source_id: DS.attr('string'),
  tariff_line: DS.attr('string'),
  description: DS.attr('string'),
  hs_6: DS.attr('string'),
  sector_code: DS.attr('string'),
  base_rate: DS.attr('string'),
  base_rate_alt: DS.attr('string'),
  final_year: DS.attr('string'),
  tariff_lines_per_6_digit: DS.attr('string'),
  tariff_rate_quota: DS.attr('string'),
  tariff_rate_quota_note: DS.attr('string'),
  tariff_eliminated: DS.attr('string'),
  product_type_id: DS.attr('string'),
  pending_data: DS.attr('string'),
  ag_id: DS.attr('string'),
  partner_name: DS.attr('string'),
  reporter_name: DS.attr('string'),
  staging_basket: DS.attr('string'),
  staging_basket_id: DS.attr('string'),
  num_mar_columns: DS.attr('string'),
  partner_start_year: DS.attr('string'),
  reporter_start_year: DS.attr('string'),
  partner_agreement_name: DS.attr('string'),
  reporter_agreement_name: DS.attr('string'),
  partner_agreement_approved: DS.attr('string'),
  reporter_agreement_approved: DS.attr('string'),
  rule_text: DS.attr('string'),
  link_text: DS.attr('string'),
  link_url: DS.attr('string'),
  quota_name: DS.attr('string'),
  industry: DS.attr('string'),

  annual_rates: DS.hasMany('annual-rate'),
  alt_annual_rates: DS.hasMany('annual-rate'),

  countries: DS.attr('string'),
  source: DS.attr('string'),

  searchResultHeader: function() {
    return this.get('source_id') + ' - ' + this.get('description');
  }.property('source_id', 'description')
});
